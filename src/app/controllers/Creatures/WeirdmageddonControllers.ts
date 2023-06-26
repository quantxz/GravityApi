import { Request, Response } from "express";
import { connection } from "../../../configs/connection";
import { CreateAnyCreature } from "../../models/creatures/anyCreature";
import { CreateWeirdCreatures } from "../../models/creatures/Weirdmageddon";

class WeirmagedomController {
    public async ViewWeirdmageddon(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM WeirdmageddonCreatures'
        
            const queryResult = await connection.promise().query(query)
            return res.status(200).json(queryResult[0])
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    public async InsertWeirdmageddon(req: Request, res: Response) {
        try {
            const { ...data } = req.body;
            await CreateWeirdCreatures(data)
            
            const queryResult = await connection.promise().query(`SELECT * FROM WeirdmageddonCreatures`)

            return res.status(200).json(queryResult[0]);

        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default new WeirmagedomController