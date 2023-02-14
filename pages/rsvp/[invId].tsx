import {google} from 'googleapis';
import { css } from '@emotion/react';
import Name from './components/name';
import {RadioButton, RadioButtonLabel} from './components/RadioButton';
import { Checkbox } from './components/Checkbox';
import { Raleway, Playfair_Display_SC } from '@next/font/google';

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
  foodRequests: {
    glutenFree: boolean,
    vegan: boolean,
    vegetarian: boolean,
    dairyFree: boolean,
    other: string
  },
  comments: string,
  message: string,
};

const parseAttendee = (rawAttendee: string[]): Attendee => ({
  first: rawAttendee[1],
  last: rawAttendee[2],
  attending: typeof rawAttendee[3] === 'undefined' ? undefined : rawAttendee[3] === 'Yes',
  foodRequests: {
    glutenFree: rawAttendee[4] === "X",
    vegan: rawAttendee[5] === "X",
    vegetarian: rawAttendee[6] === "X",
    dairyFree: rawAttendee[7] === "X",
    other: rawAttendee[8],
  },
  comments: rawAttendee[9],
  message: rawAttendee[10],
});

const RSVP = ({ attendees }) => {


  return (
    <div css={css`min-height: 100%; width: 100%; background: #fffaf3; padding: 2rem 1rem;`}>
      <div css={css`max-width: 650px; margin-right: auto; margin-left: auto; display: flex; flex-direction: column; gap: 2rem;`}>
        {attendees.map(attendee => {
          const parsedAttendee = parseAttendee(attendee);
          return (
            <div key={parsedAttendee.first}>
              <Name>{parsedAttendee.first}<br />{parsedAttendee.last}</Name>
              <div css={css`display: flex; justify-content: space-around; margin: 1rem 0;`}>
                <div css={css`display: flex; flex-direction: column; align-items: center;`}>
                  <RadioButton type="radio" name={`${parsedAttendee.first}_attending`} id={`${parsedAttendee.first}_yes`} defaultChecked={parsedAttendee.attending === true} />
                  <RadioButtonLabel htmlFor={`${parsedAttendee.first}_yes`}>Graciously Accepts</RadioButtonLabel>
                </div>
                <div css={css`display: flex; flex-direction: column; align-items: center;`}>
                  <RadioButton type="radio" name={`${parsedAttendee.first}_attending`} id={`${parsedAttendee.first}_no`} defaultChecked={parsedAttendee.attending === false} />
                  <RadioButtonLabel htmlFor={`${parsedAttendee.first}_no`}>Respectfully Declines</RadioButtonLabel>
                </div>
              </div>
              <div css={css`display: grid; grid-template-rows: 1fr 1fr 1fr 1fr; grid-template-columns: 1fr 1fr; max-width: 75%; margin-right: auto; margin-left: auto; font-family: ${textFont.style.fontFamily}`}>
                <div css={css`grid-column: 1 / 3; grid-row: 1; border-bottom: 2px solid #13273f; padding: 0.5rem 0; text-align: center; font-size: 1.5rem; font-family: ${headerFont.style.fontFamily}; line-height: 1.25rem;`}>
                  Food Accomodations
                </div>
                <div css={css`grid-column: 1; grid-row: 2; display: flex; align-items: center;`}>
                  <Checkbox type="checkbox" name={`${parsedAttendee.first}_food`} id={`${parsedAttendee.first}_glutenFree`} defaultChecked={parsedAttendee.foodRequests.glutenFree}/>
                  <label htmlFor={`${parsedAttendee.first}_glutenFree`} >Gluten Free</label>
                </div>
                <div css={css`grid-column: 2; grid-row: 2; display: flex; align-items: center;`}>
                  <Checkbox type="checkbox" name={`${parsedAttendee.first}_food`} id={`${parsedAttendee.first}_vegan`} defaultChecked={parsedAttendee.foodRequests.vegan} />
                  <label htmlFor={`${parsedAttendee.first}_vegan`}>Vegan</label>
                </div>
                <div css={css`grid-column: 1; grid-row: 3; display: flex; align-items: center;`}>
                  <Checkbox type="checkbox" name={`${parsedAttendee.first}_food`} id={`${parsedAttendee.first}_vegetarian`} defaultChecked={parsedAttendee.foodRequests.vegetarian} />
                  <label htmlFor={`${parsedAttendee.first}_vegetarian`}>Vegetarian</label>
                </div>
                <div css={css`grid-column: 2; grid-row: 3; display: flex; align-items: center;`}>
                  <Checkbox type="checkbox" name={`${parsedAttendee.first}_food`} id={`${parsedAttendee.first}_dairyFree`} defaultChecked={parsedAttendee.foodRequests.dairyFree} />
                  <label htmlFor={`${parsedAttendee.first}_dairyFree`}>Dairy Free</label>
                </div>
                <div css={css`grid-column: 1 / 3; grid-row: 4; display: flex; align-items: center;`}>
                  <Checkbox type="checkbox" name={`${parsedAttendee.first}_food`} id={`${parsedAttendee.first}_other`} defaultChecked={typeof parsedAttendee.foodRequests.other !== "undefined"} />
                  <label htmlFor={`${parsedAttendee.first}_other`}>Other <input type="text" id={`${parsedAttendee.first}_otherText`} defaultValue={parsedAttendee.foodRequests.other}/></label>
                </div>
              </div>
            </div>
          )
        })}
        <div>
          <div css={css`font-size: 1.5rem; font-family: ${headerFont.style.fontFamily}; text-align: center;`}>
            Questions or Comments:
          </div>
          <textarea id="questionsOrComments" css={css`width: 75%; display: block; margin-right: auto; margin-left: auto;`} rows={4}/>
        </div>
        <div>
          <div css={css`font-size: 1.5rem; font-family: ${headerFont.style.fontFamily}; text-align: center;`}>
            Message to the Couple:
          </div>
          <textarea id="message" css={css`width: 75%; display: block; margin-right: auto; margin-left: auto;`} rows={4}/>
        </div>
        <button css={css`width: 50%; font-family: ${headerFont.style.fontFamily}; font-size: 1.5rem; border: 0; background: #13273f; color: #fffaf3; text-align: center; margin-right: auto; margin-left: auto; border-radius: .5rem;`}>SUBMIT</button>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { invId } = params;
  
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64").toString()
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
  const attendees = (sheetsRes.data.values || []).filter(row => row[0] === invId);

  return {
    props: { attendees, invId },
  }
}

export default RSVP;