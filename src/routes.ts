import { Request, Response, Router } from "express";
import { pool } from "./configs/PG"
import MainCharsControllers from "./app/controllers/MainCharsControllers";
import EpisodesControlllers from "./app/controllers/EpisodesControlllers";
import BooksControllers from "./app/controllers/BooksControllers";
const routes: Router = Router();


routes.get("/", async (req: Request, res: Response) => {
  return res.status(200).json("tudo ok")
});

routes.get("/episodes", EpisodesControlllers.ViewEpisode);

routes.post("/episodes", EpisodesControlllers.insertEpisode);

routes.post("/Characters/Main", MainCharsControllers.insertMainCharacters)

routes.get("/Characters/Main", MainCharsControllers.viewMainChars);

routes.get("/books", BooksControllers.ViewBooks)

routes.post("/books", BooksControllers.InsertBook);

routes.get("/mainCharsRelatives", async (req: Request, res: Response) => {
  try {
    const query = 'SELECT * FROM mainCharsRelatives';

    const { rows } = await pool.query(query);

    res.json(rows);

  } catch (err) {
    console.error('Erro ao executar consulta:', err);
    res.status(500).send('Erro ao executar consulta.');
  }
});



export default routes;
