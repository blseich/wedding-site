// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(`https://www.google.com/maps/embed/v1/place?key=${process.env.MAPS_API_KEY}&q=strongwater+food+and+spirits,columbus+oh`)
  res.status(200).send(response.body);
}
