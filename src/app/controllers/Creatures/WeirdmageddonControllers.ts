import { Request, Response } from "express";
import { sql } from "@vercel/postgres";
import { CreateWeirdCreatures } from "../../models/creatures/Weirdmageddon";

class WeirmagedomController {
    public async ViewWeirdmageddon(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM weirdmageddoncreatures';
            const { rows } = await sql.query(query);
            return res.status(200).json(rows);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async InsertWeirdmageddon(req: Request, res: Response) {
        try {
            const { ...data } = req.body;
            await CreateWeirdCreatures(data);
            
            const query = 'SELECT * FROM weirdmageddoncreatures';
            const { rows } = await sql.query(query);

            return res.status(200).json(rows);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new WeirmagedomController();
