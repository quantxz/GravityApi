import { Request, Response, Router } from "express";
import { pool } from "./configs/PG"
import MainCharsControllers from "./app/controllers/MainCharsControllers";
import EpisodesControlllers from "./app/controllers/EpisodesControlllers";
import BooksControllers from "./app/controllers/BooksControllers";
import MainCharsRealativesControllers from "./app/controllers/relatives/MainCharsRealativesControllers";
const routes: Router = Router();


routes.get("/", async (req: Request, res: Response) => {
  return res.status(200).json("tudo ok")
});

routes.get("/episodes", EpisodesControlllers.ViewEpisode);

routes.post("/episodes", EpisodesControlllers.insertEpisode);

routes.get("/Characters/Main", MainCharsControllers.viewMainChars);

routes.post("/Characters/Main", MainCharsControllers.insertMainCharacters);

routes.get("/books", BooksControllers.ViewBooks);

routes.post("/books", BooksControllers.InsertBook);

routes.post("/mainCharsRelatives", MainCharsRealativesControllers.insertMainCharsRealatives);



export default routes;
