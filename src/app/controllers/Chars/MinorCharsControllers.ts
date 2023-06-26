import { Request, Response } from "express";
import { connection } from "../../../configs/connection";
import { createMinorCharacters } from "../../models/Chars/InsertMinorChars";

class MinorCharsConroller {
    public async ViewMinors(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM minorschars'

            const queryResult = await connection.promise().query(query)
            
            return res.status(200).json(queryResult[0])
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    public async InsertMinors(req: Request, res: Response) {
        try {
            const { ...data } = req.body

            await createMinorCharacters(data)

            const query = 'SELECT * FROM minorschars'
            const queryResult = await connection.promise().query(query)
            
            return res.status(200).json(queryResult[0])

        } catch(err) {
            return res.status(500).json(err)
        }
    } 
}

export default new MinorCharsConroller