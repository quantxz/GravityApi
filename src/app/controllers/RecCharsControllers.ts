import { Request, Response } from "express"
import { connection } from "../../configs/connection"
import { createRecCharacters } from "../models/Chars/InsertRecChars"

class RecCharsController {
    public async ViewRecChars(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM recurrentschars'

            const queryResults = await connection.promise().query(query)
    
            return res.status(200).json(queryResults[0])
        } catch(err) {
            return res.status(500).json(err)
        }
    }

    public async InsertRecChars(req: Request, res: Response) {
        try {
            const { ...data } = req.body;

            await createRecCharacters(data)

            const query = 'SELECT * FROM recurrentschars'
            const queryResults = await connection.promise().query(query)
    
            return res.status(200).json(queryResults[0])

        } catch(err) {
            return res.status(500).json(err)
        }

    }
}

export default new RecCharsController