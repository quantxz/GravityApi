import { Request, Response } from "express";
import { sql } from "@vercel/postgres";
import { CreateAnyCreature } from "../../models/creatures/anyCreature";

class CreaturesController {
    public async ViewCreatures(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM anycreature';
            const { rows } = await sql.query(query);
            
            return res.status(200).json(rows);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async InsertCreatures(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM anycreature';

            const { ...data } = req.body;

            await CreateAnyCreature(data);

            const { rows } = await sql.query(query);
            return res.status(200).json(rows);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new CreaturesController();
