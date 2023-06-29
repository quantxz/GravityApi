import { Request, Response } from "express";
import { sql } from "@vercel/postgres";
import { CreateRecRelatives } from "../../models/relatives/recCharsRelatives";

class RecRelativesController {
    public async ViewRelations(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM recurrentscharsrelatives';
            const { rows } = await sql.query(query);
            
            return res.status(200).json(rows);

        } catch (err) {
            console.error('Error while executing query:', err);
            return res.status(500).json(err);
        }
    }

    public async InsertRelations(req: Request, res: Response) {
        try {
            const { ...data } = req.body;
            const query = 'SELECT * FROM recurrentscharsrelatives';

            await CreateRecRelatives(data);

            const { rows } = await sql.query(query);

            return res.status(200).json(rows);

        } catch(err) {
            return res.status(500).json(err);
        }
    }
}

export default new RecRelativesController();
