import { Request, Response } from "express";
import { connection } from "../../../configs/connection";
import { CreateWeirdCreatures } from "../../models/creatures/Weirdmageddon";
import { CreateAnyCreature } from "../../models/creatures/anyCreature";

class CreaturesController {
    public async ViewCreatures(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM AnyCreature'
        
            const queryResult = await connection.promise().query(query)
            return res.status(200).json(queryResult[0])
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    public async InsertCreatures(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM AnyCreature'

            const { ...data } = req.body;

            await CreateAnyCreature(data)
    
            const queryResult = await connection.promise().query(query)

            return res.status(200).json(queryResult[0]);

        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default new CreaturesController