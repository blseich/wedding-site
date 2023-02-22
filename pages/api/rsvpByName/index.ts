import {google} from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next'

const Invitation = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }

  const { first = '', last = '' } = req.query;
  
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY as string, "base64").toString()
  );
  const client = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  let spreadsheetId = '1si9DGtGks2MAh4xeWXZM0JVgU0ccVZSbKnGXQd6-CGI';
  let sheetName = 'RSVPs!A2:C138';
  let sheets = google.sheets('v4');

  const sheetsRes = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: spreadsheetId,
    range: sheetName
  });

  const rsvp = sheetsRes.data.values?.filter(row => row[1].toUpperCase() === (first as string).toUpperCase() && row[2].toUpperCase() === (last as string).toUpperCase())[0];

  if (typeof rsvp !== 'undefined') {
    res.status(200).json(JSON.stringify(rsvp));
  } else {
    res.status(404).send({ message: `Invitation not found for ${first} ${last}` });
  }
}

export default Invitation;