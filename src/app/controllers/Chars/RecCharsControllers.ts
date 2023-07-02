import { Request, Response } from "express";
import { QueryResult, sql } from "@vercel/postgres";
import { createRecCharacters } from "../../models/Chars/InsertRecChars";

class RecCharsController {
    public async ViewRecChars(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM recurrentschars';
            const { rows } = await sql.query(query);
            
            return res.status(200).json(rows);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async InsertRecChars(req: Request, res: Response) {
        try {
            const { ...data } = req.body;

            await createRecCharacters(data);

            const query = 'SELECT * FROM recurrentschars';
            const { rows } = await sql.query(query);
            return res.status(200).json(rows);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async ViewSpecifyChar(req: Request, res: Response) {
        try {
            const { name } = req.params;

            const query = "SELECT * FROM recurrentschars WHERE name LIKE $1"
      
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

export default new RecCharsController();
