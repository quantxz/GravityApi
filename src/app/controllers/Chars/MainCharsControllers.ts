import { Request, Response } from "express";
import { createMainCharacters } from "../../models/Chars/InsertMainChars";
import { connection } from "../../../configs/connection";

class mainCharsController {
    public async viewMainChars(req: Request, res: Response) {
        try {
            
        const query = 'SELECT * FROM mainChars'
        const queryResults = await connection.promise().query(query)

        return res.status(200).json(queryResults[0])

        } catch(err) {
            return res.status(500).json(err)
        }
    }

    public async insertMainCharacters(req: Request, res: Response) {
        try {
            const { ...data } = req.body;
        
            await createMainCharacters(data)       
                     
            const query = 'SELECT * FROM mainChars'
            const queryResults = await connection.promise().query(query)
        
            return res.status(200).json(queryResults[0])

        } catch(err) {
            return res.status(500).json(err)
        }
    }

    
}

export default new mainCharsController