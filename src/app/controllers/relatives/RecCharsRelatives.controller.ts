import { Request, Response } from "express";
import { QueryResult, sql } from "@vercel/postgres";
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
    
    public async ViewSpecifyRelativeById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const query = "SELECT * FROM recurrentscharsrelatives WHERE id = $1";
            const values = [id];
            
            sql.query(query, values, (err: Error, result: QueryResult<any>) => {
              if (err) {
                return res.status(500).json(err);
              }
              return res.status(200).json(result.rows);
            });
        } catch(err) {
            return res.status(500).json(err);
        }
    }

    public async ViewSpecifyRelativeByName(req: Request, res: Response) {
        try {
            const { name } = req.params;

            const query = "SELECT * FROM recurrentscharsrelatives WHERE charactername LIKE $1"
      
            const values = [name]
      
            sql.query(query, values, (err: Error, result: QueryResult<any>) => {
              if (err) {
                return res.status(500).json(err);
              }
              return res.status(200).json(result.rows);
            });

        } catch(err) {
            return res.status(500).json(err);
        }
    }
}

export default new RecRelativesController();
