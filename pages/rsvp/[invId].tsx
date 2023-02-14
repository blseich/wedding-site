import {google} from 'googleapis';
import { css } from '@emotion/react';
import AttendeeRsvpCard from '../../components/rsvp/AttendeeCard';
import { Raleway, Playfair_Display_SC } from '@next/font/google';
import { useState } from 'react';

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin']
});

const textFont = Raleway({
  weight: "400",
  subsets: ['latin']
});


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

const RSVP = ({ attendeeData }: { attendeeData: string[][] }) => {
  const [attendees, setAttendees]: [AttendeeMap, (attendees: AttendeeMap) => void] = useState(attendeeData.reduce((attendeeMap, attendee) => ({
    ...attendeeMap,
    [`${attendee[1]}`]: parseAttendee(attendee) 
  }), {}));
  const [ qsOrCs, setQsOrCs ] = useState(attendeeData[0][9]);
  const [ message, setMessage ] = useState(attendeeData[0][10]);
  
  return (
    <div css={css`min-height: 100%; width: 100%; background: #fffaf3; padding: 2rem 1rem;`}>
      <form
        css={css`max-width: 650px; margin-right: auto; margin-left: auto; display: flex; flex-direction: column; gap: 2rem;`}
        onSubmit={(e) => {
          // console.log({
          //   attendees,
          //   message,
          //   qsOrCs,
          // });
          e.preventDefault();
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
          <div css={css`font-size: 1.5rem; font-family: ${headerFont.style.fontFamily}; text-align: center;`}>
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
          <div css={css`font-size: 1.5rem; font-family: ${headerFont.style.fontFamily}; text-align: center;`}>
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
        <button
          css={css`width: 50%; font-family: ${headerFont.style.fontFamily}; font-size: 1.5rem; border: 0; background: #13273f; color: #fffaf3; text-align: center; margin-right: auto; margin-left: auto; border-radius: .5rem;`}
          type='submit'
        >SUBMIT</button>
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
  let sheetName = 'RSVPs!A2:K47';
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