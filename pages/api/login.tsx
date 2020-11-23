// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../lib/db";
import escape from "sql-template-strings";
import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from "next";
import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'

export default nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res){
    res.status(500).json({error: error.message});
  },
  onNoMatch(req, res){
    res.status(405).json({error: `Method ${req.method} Not Allowed`});
  }
}).post(async (req, res) => {
    
    const adminDataRaw = await query(escape`
        SELECT * FROM Admins
        WHERE Username = ${req.body.username}
        LIMIT 1
    `);
    const adminData = adminDataRaw[0];
    console.log(adminData);
    console.log(adminData.Password);
    try{
        compare(req.body.password, adminData.Password, function(err, result) {
            if(!err && result){
                const claims = {sub: adminData.ID, name: adminData.Username };
                const jwt = sign(claims, '41c5a99e-e0cb-4d36-b8a8-fe0fa682d6cc');

                res.status(200).json({ authToken: jwt });
            }else{
                res.status(500).json({message: 'Вы ввели неверный логин или пароль'});
            }
        })
    }
    catch{
        res.status(500).json({message: 'Вы ввели неверный логин или пароль'});
    }
});
