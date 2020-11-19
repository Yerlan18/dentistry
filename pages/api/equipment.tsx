// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../lib/db";
import escape from "sql-template-strings";
import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from "next";

export default nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res){
    res.status(500).json({error: error.message});
  },
  onNoMatch(req, res){
    res.status(405).json({error: `Method ${req.method} Not Allowed`});
  }
}).get(async (req,res) => {
  const retdata = await query(escape`
  SELECT * FROM Equipment
  `)
  res.status(200).json(retdata);
  // res.statusCode = 200
  // res.json({ retdata })
}).post(async (req, res) => {
  console.log(req.body);
  const { lastId } = await query(escape`
    INSERT Equipment (TitleRu, TitleKz, DescriptionRu, DescriptionKz)
    VALUES (${req.body.titleRu}, ${req.body.titleKz}, ${req.body.descriptionRu}, ${req.body.descriptionKz})
  `)

  res.status(200).json({id: lastId});
}).put(async (req,res) =>{
    
})
