import { Request, Response } from "express";
import { createMainCharacters } from "../models/MainChars/InsertMainChars";
import { pool } from "../../configs/PG";

class mainCharsController {
    public async viewMainChars(req: Request, res: Response) {

        const query = 'SELECT * FROM mainChars'
        const { rows } = await pool.query(query)

        return res.status(200).json(rows)
    }

    public async insertMainCharacters(req: Request, res: Response) {
        const { ...data } = req.body;
        
        await createMainCharacters(data)

        return res.status(200).json("tudo ok")
    }

    
}

export default new mainCharsController