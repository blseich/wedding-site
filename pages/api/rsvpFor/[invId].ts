import {google} from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next'

const Invitation = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const { invId } = req.query;
  const { attendees, message, qsOrCs } = req.body;
  
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY as string, "base64").toString()
  );
  const client = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  let spreadsheetId = '1si9DGtGks2MAh4xeWXZM0JVgU0ccVZSbKnGXQd6-CGI';
  let sheetName = 'RSVPs!A2:B140';
  let sheets = google.sheets('v4');

  const sheetsRes = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: spreadsheetId,
    range: sheetName
  });

  const rangesToUpdate = Object.keys(attendees).reduce((updates, attendeeFirst) => {
    const rowNum = sheetsRes.data.values?.findIndex(value => value[0] === invId && value[1] === attendeeFirst) || 0;
    const attendeeObj = attendees[attendeeFirst];
    return [
      ...updates,
      {
        range: `RSVPs!A${rowNum + 2}:L${rowNum + 2}`,
        majorDimension: 'ROWS',
        values: [[
          invId,
          attendeeObj.first,
          attendeeObj.last,
          attendeeObj.attending ? 'Yes' : 'No',
          attendeeObj.glutenFree ? 'X' : '',
          attendeeObj.vegan ? 'X' : '',
          attendeeObj.vegetarian ? 'X' : '',
          attendeeObj.dairyFree ? 'X' : '',
          attendeeObj.other,
          '',
          '',
          new Date().toDateString(),
        ]]
      }
    ]
  }, [] as { range: string, majorDimension: string, values: string[][]}[]);

  rangesToUpdate[0].values[0][9] = qsOrCs;
  rangesToUpdate[0].values[0][10] = message;

  const sheetsUpdate = await sheets.spreadsheets.values.batchUpdate({
    auth: client,
    spreadsheetId: spreadsheetId,
    requestBody: {
      data: rangesToUpdate,
      valueInputOption: 'RAW',
    },
  });

  res.status(200).json("SUCCESS");
}

export default Invitation;