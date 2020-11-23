// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../lib/db";
import escape from "sql-template-strings";
import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from "next";
import {hash} from 'bcrypt'

export default nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res){
    res.status(500).json({error: error.message});
  },
  onNoMatch(req, res){
    res.status(405).json({error: `Method ${req.method} Not Allowed`});
  }
}).post(async (req, res) => {
  
    hash(req.body.password, 10, async function(err, hash) {
        console.log(hash);
        const { lastId } = await query(escape`
            INSERT Admins (Username, Password)
            VALUES (${req.body.username}, ${hash})
        `);
        res.status(200).json({id: lastId});
    })
    
});
