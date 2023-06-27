import { Request, Response } from "express";
import { sql } from "@vercel/postgres";
import { createMinorCharacters } from "../../models/Chars/InsertMinorChars";

class MinorCharsController {
    public async ViewMinors(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM minorschars';
            const { rows } = await sql.query(query);
            
            return res.status(200).json(rows);
            
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async InsertMinors(req: Request, res: Response) {
        try {
            const data = req.body;

            await createMinorCharacters(data);

            const query = 'SELECT * FROM minorschars';
            const { rows } = await sql.query(query);
            return res.status(200).json(rows);
        } catch (err) {
            return res.status(500).json(err);
        }
    } 
}

export default new MinorCharsController();
