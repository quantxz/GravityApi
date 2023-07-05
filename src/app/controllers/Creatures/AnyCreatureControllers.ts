import { Request, Response } from "express";
import { QueryResult, sql } from "@vercel/postgres";
import { CreateAnyCreature } from "../../models/creatures/anyCreature";
import Decipher from "../../../middlewares/token";
require('dotenv').config();

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
            const token: any = req.headers['x-acess-token']
            
            if(Decipher(token) === process.env.SECRET){
                const query = 'SELECT * FROM anycreature';

                const { ...data } = req.body;

                await CreateAnyCreature(data);

                const { rows } = await sql.query(query);

                return res.status(200).json(rows);
                
            } else {
                return res.status(401).json({
                  "errorMessage": "usuario não autorizado a fazer esta operação"
                })
            }

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async ViewSpecifyCreature(req: Request, res: Response) {
        try {
            const { name } = req.params;

            const query = "SELECT * FROM anycreature WHERE name LIKE $1"
      
            const values = [name]
      
            sql.query(query, values, (err: Error, result: QueryResult<any>) => {
              if (err) {
                return res.status(500).json(err);
              }
              return res.status(200).json(result.rows);
            });

        } catch (err) {
            return res.status(500).json(err);
        }
    }

}

export default new CreaturesController();
