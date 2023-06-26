import { Response, Router } from "express";
import BooksControllers from "../app/controllers/books/BooksControllers";
import { connection } from "../configs/connection";
const routes: Router = Router();

routes.get("/", async (res: Response) => {
    const queryResult = await connection.promise().query('SELECT * FROM episodes') 
    return res.status(200).json(queryResult[0])
    
}); 

export default routes;
