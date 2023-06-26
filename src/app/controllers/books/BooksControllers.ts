import { Request, Response } from "express";
import { connection } from "../../../configs/connection";
import { CreateBook } from "../../models/Books/InsertBooksModel";


class booksController {
    public async ViewBooks(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM books'

            const queryResult = await connection.promise().query(query)
    
            return res.status(200).json(queryResult[0])

        } catch(err) {
            return res.status(500).json(err)
        }
    }

    public async InsertBook(req: Request, res: Response) {
        try {
            const { ...data } = req.body;
            const query = 'SELECT * FROM books'

            await CreateBook(data)

            const queryResult = await connection.promise().query(query)
            
            return res.status(200).json(queryResult[0])
    

        } catch(err) {
            return res.status(500).json(err)
        }

    }
}

export default new booksController