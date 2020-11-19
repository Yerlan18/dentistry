// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../lib/db";
import escape from "sql-template-strings";
import nextConnect from 'next-connect';

export default async (req, res) => {
  const retdata = await query(escape`
    SELECT * FROM Appointments
  `)
  res.statusCode = 200
  res.json({ retdata })
}
