import {google} from 'googleapis';
import { css } from '@emotion/react';
import AttendeeRsvpCard from '../../components/rsvp/AttendeeCard';
import { useEffect, useState } from 'react';
import SubmitButton from '../../components/rsvp/SubmitButton';
import Link from 'next/link';
import { headerFont, textFont } from '../../styles/fonts';

type Attendee = {
  first: string,
  last: string,
  attending: boolean | undefined,
  glutenFree: boolean,
  vegan: boolean,
  vegetarian: boolean,
  dairyFree: boolean,
  other: string,
};

type AttendeeMap = {
  [key: string]: Attendee
};

const parseAttendee = (rawAttendee: string[]): Attendee => ({
  first: rawAttendee[1],
  last: rawAttendee[2],
  attending: !rawAttendee[3] ? undefined : rawAttendee[3] === 'Yes',
  glutenFree: rawAttendee[4] === "X",
  vegan: rawAttendee[5] === "X",
  vegetarian: rawAttendee[6] === "X",
  dairyFree: rawAttendee[7] === "X",
  other: rawAttendee[8],
});

const allReplied = (attendees: AttendeeMap): boolean => !Object.values(attendees).some(attendee => typeof attendee.attending === 'undefined');

const RSVP = ({ attendeeData, invId }: { attendeeData: string[][], invId: string }) => {
  const [attendees, setAttendees]: [AttendeeMap, (attendees: AttendeeMap) => void] = useState(attendeeData.reduce((attendeeMap, attendee) => ({
    ...attendeeMap,
    [`${attendee[1]}`]: parseAttendee(attendee) 
  }), {}));
  const [submitStatus, setSubmitStatus] = useState(allReplied(attendees) ? 'incomplete' : 'ready');
  const [ qsOrCs, setQsOrCs ] = useState(attendeeData[0][9]);
  const [ message, setMessage ] = useState(attendeeData[0][10]);

  useEffect(() => {
    if (allReplied(attendees)) {
      setSubmitStatus('ready');
    } else {
      setSubmitStatus('incomplete');
    }
  }, [attendees, qsOrCs, message])
  
  return (
    <div css={css`min-height: 100%; max-width: 650px; margin-right: auto; margin-left: auto; background: #fffaf3; padding: 3rem 1rem;`}>
      <div css={css`color: #13273f; font-size: 4rem; ${headerFont} border-bottom: 2px solid #13273f;`}>RSVP</div>
      <form
        css={css`display: flex; flex-direction: column; gap: 2rem; margin-top: 1rem;`}
        onSubmit={async (e) => {
          setSubmitStatus('pending');
          e.preventDefault();
          const response = await fetch(`/api/rsvpFor/${invId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ attendees, qsOrCs, message }),
          });
          response.ok ? setSubmitStatus('success') : setSubmitStatus('error');
        }}
      >
        {Object.keys(attendees).map(name => {
          return (
            <div key={name}>
              <AttendeeRsvpCard attendee={attendees[name]} onUpdate={(updatedParams) => {
                setAttendees({
                  ...attendees,
                  [`${name}`]: {
                    ...attendees[name],
                    ...updatedParams,
                  }
                })
              }}/>
            </div>
          )
        })}
        <div>
          <div css={css`font-size: 1.5rem; ${headerFont} text-align: center;`}>
            Questions or Comments:
          </div>
          <textarea
            id="questionsOrComments"
            css={css`width: 75%; display: block; margin-right: auto; margin-left: auto;`}
            rows={4}
            value={qsOrCs}
            onChange={(e) => setQsOrCs(e.target.value)}
          />
        </div>
        <div>
          <div css={css`font-size: 1.5rem; ${headerFont} text-align: center;`}>
            Message to the Couple:
          </div>
          <textarea 
            id="message"
            css={css`width: 75%; display: block; margin-right: auto; margin-left: auto;`}
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div css={css`text-align: center; ${textFont} color: #a3a3a3; font-style: italic;`}>
          {submitStatus === 'incomplete' && "Please provide a response for all invitees before submitting. You can return to make updates at any time."}
        </div>
        <SubmitButton 
          status={submitStatus}
          successMsg={
            <>
              Thank you for your response. Come back at any time to make changes.<br/><br/>
              Want to keep browsing? Click <Link href='/'>here</Link> to return home or <Link href="/#registry">here</Link> to check out our registry.
            </>
          }
          errorMsg={
            <>
              There was an error submitting your response. Please click <Link href="javascript:window.scrollTo(0,0);location.reload();">here</Link> to refresh your browser and try again.
            </>}
        />
      </form>
    </div>
  )
}

export async function getServerSideProps({ params }: { params: { invId: string }}) {
  const { invId } = params;
  
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY as string, "base64").toString()
  );
  const client = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  let spreadsheetId = '1si9DGtGks2MAh4xeWXZM0JVgU0ccVZSbKnGXQd6-CGI';
  let sheetName = 'RSVPs!A2:K140';
  let sheets = google.sheets('v4');
  const sheetsRes = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: spreadsheetId,
    range: sheetName
  });
  const attendeeData = (sheetsRes.data.values || []).filter(row => row[0] === invId);
  return {
    props: { attendeeData, invId },
  }
}

export default RSVP;