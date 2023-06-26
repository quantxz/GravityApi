import { Response, Router } from "express";
import BooksControllers from "../app/controllers/BooksControllers";
const BooksRoutes: Router = Router();

BooksRoutes.get("/books", BooksControllers.ViewBooks); //feito

BooksRoutes.post("/books", BooksControllers.InsertBook); //feito

export default BooksRoutes;
