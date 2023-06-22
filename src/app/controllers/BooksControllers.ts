import { Request, Response } from "express";
import { pool } from "../../configs/PG";
import { CreateBook } from "../models/Books/InsertBooksModel";


class booksController {
    public async ViewBooks(req: Request, res: Response) {
        const query = "SELECT * FROM books"

        const { rows } = await pool.query(query)

        return res.status(200).json(rows)
    }

    public async InsertBook(req: Request, res: Response) {
        const { ...data } = req.body;

        await CreateBook(data)

        return res.json("tudo ok")
    }
}

export default new booksController