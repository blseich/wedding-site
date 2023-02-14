import {google} from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next'

const Invitation = async (req: NextApiRequest, res: NextApiResponse) => {
  const { invId } = req.query;
  
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY as string, "base64").toString()
  );
  const client = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  let spreadsheetId = '1si9DGtGks2MAh4xeWXZM0JVgU0ccVZSbKnGXQd6-CGI';
  let sheetName = 'RSVPs!A2:C43';
  let sheets = google.sheets('v4');
  const sheetsRes = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: spreadsheetId,
    range: sheetName
  });
  const attendees = (sheetsRes.data.values || []).filter(row => row[0] === invId);
  res.status(200).json(attendees);
}

export default Invitation;