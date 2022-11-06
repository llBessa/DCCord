import { NextApiRequest, NextApiResponse } from "next";

export default function test(req: NextApiRequest, res: NextApiResponse){
    console.log(req.headers)
    res.status(200).send("ok")
}