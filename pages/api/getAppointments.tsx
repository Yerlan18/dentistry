// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../lib/db";
import escape from "sql-template-strings";
import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import {verify} from 'jsonwebtoken'

const authenticated = (fn: NextApiHandler) => async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    return await fn(req, res);
};

export default nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res){
    res.status(500).json({error: error.message});
  },
  onNoMatch(req, res){
    res.status(405).json({error: `Method ${req.method} Not Allowed`});
  }
}).get(async (req,res) => {
    console.log('here');
    if(!req.headers || !req.headers.authorization){
        res.status(401);
        res.send("Unauthorized");
    }
    verify(req.headers.authorization, '41c5a99e-e0cb-4d36-b8a8-fe0fa682d6cc', async function(err, decoded){
        if(!err && decoded){
            const retdata = await query(escape`
            SELECT * FROM Appointments
            `)
            res.status(200).json(retdata);
        }else{
            res.status(401);
            res.send("Unauthorized");
        }
    });

  
  // res.statusCode = 200
  // res.json({ retdata })
});