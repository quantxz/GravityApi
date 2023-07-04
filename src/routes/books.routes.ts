import { Response, Router } from "express";
import BooksControllers from "../app/controllers/books/BooksControllers";
const BooksRoutes: Router = Router();

BooksRoutes.get("/books", BooksControllers.ViewBooks); //feito

BooksRoutes.get("/books/id/:id", BooksControllers.ViewSpecifyBookById); //feito

BooksRoutes.get("/books/title/:title", BooksControllers.ViewSpecifyBookByName); //feito

BooksRoutes.post("/books", BooksControllers.InsertBook); //feito

export default BooksRoutes;
