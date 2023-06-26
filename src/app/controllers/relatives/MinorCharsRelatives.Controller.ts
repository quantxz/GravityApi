import { Request, Response } from "express";
import { connection } from "../../../configs/connection";
import { CreateRelatives } from "../../models/relatives/MainCharsRealatives";
import { CreateMinorsRelatives } from "../../models/relatives/MinorCharsRelatives";


class MinorsRealativesController {

    public async ViewRelations(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM minoscharsrelatives';

            const queryResults = await connection.promise().query(query);

            return res.status(200).json(queryResults[0]);

        } catch (err) {
            console.error('Error while executing query:', err);
            return res.status(500).json(err);
        }
    }

    public async InsertRelations(req: Request, res: Response) {
        try {
            const { ...data } = req.body;

            await CreateMinorsRelatives(data)

            const query = 'SELECT * FROM minoscharsrelatives';
            const queryResults = await connection.promise().query(query);

            return res.status(200).json(queryResults[0]);

        } catch(err) {
            return res.status(500).json(err)
        }

    }
}

export default new MinorsRealativesController