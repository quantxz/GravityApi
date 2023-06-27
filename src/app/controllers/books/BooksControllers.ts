import { Request, Response } from "express";
import { sql } from "@vercel/postgres";
import { CreateBook } from "../../models/Books/InsertBooksModel";


class BooksController {
  public async ViewBooks(req: Request, res: Response) {
    try {
      const query = "SELECT * FROM books";
      const { rows } = await sql.query(query);
      
      return res.status(200).json(rows);

    } catch(err) {
      return res.status(500).json(err);
    }
  }

  public async InsertBook(req: Request, res: Response) {
    try {
      const data = req.body;

      await CreateBook(data);

      const query = "SELECT * FROM books";
      const { rows } = await sql.query(query);
      return res.status(200).json(rows);
    } catch(err) {
      return res.status(500).json(err);
    }
  }
}

export default new BooksController();
