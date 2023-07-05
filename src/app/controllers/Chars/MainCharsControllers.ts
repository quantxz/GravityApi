import { Request, Response, query } from "express";
import { QueryResult, sql } from "@vercel/postgres";
import { createMainCharacters } from "../../models/Chars/InsertMainChars";
import Decipher from "../../../middlewares/token";
require('dotenv').config();
class MainCharsController {
  public async viewMainChars(req: Request, res: Response) {
    try {
      const query = "SELECT * FROM mainChars";
      const { rows } = await sql.query(query);
      
      return res.status(200).json(rows);
      
    } catch(err) {
      return res.status(500).json(err);
    }
  }

  public async insertMainCharacters(req: Request, res: Response) {
      try {
        const { ...data } = req.body;
        const token: any = req.headers['x-acess-token']
        
        if(Decipher(token) === process.env.SECRET) {
          await createMainCharacters(data);

          const query = "SELECT * FROM mainChars";
          const { rows } = await sql.query(query);

          return res.status(200).json(rows); 
          
        } else {
          return res.status(401).json({
            "errorMessage": "usuario não autorizado a fazer esta operação"
          })
        }
      
    } catch(err) {
      return res.status(500).json(err);
    }
  }

  public async ViewSpecifyChar(req: Request, res: Response) {
    try {
      const { name } = req.params;

      const query = "SELECT * FROM mainchars WHERE name LIKE $1"

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

export default new MainCharsController();
