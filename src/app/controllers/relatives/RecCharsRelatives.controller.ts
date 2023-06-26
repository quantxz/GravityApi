import { Request, Response } from "express";
import { connection } from "../../../configs/connection";
import { CreateRecRelatives } from "../../models/relatives/recCharsRelatives";

class RecRelatives {
    public async ViewRelations(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM recurrentscharsrelatives'

            const queryResult = await connection.promise().query(query)

            return res.status(200).json(queryResult[0])

        } catch(err) {
            return res.status(500).json(err)
        }
    }

    public async InsertRelations(req: Request, res: Response) {
        try {
            const { ...data } = req.body;

            const query = 'SELECT * FROM recurrentscharsrelatives'

            await CreateRecRelatives(data)

            const queryResult = await connection.promise().query(query)

            return res.status(200).json(queryResult[0])

        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default new RecRelatives