import { Request, Response, Router } from "express";
import { pool } from "./configs/PG"
import MainCharsControllers from "./app/controllers/MainCharsControllers";
import EpisodesControlllers from "./app/controllers/EpisodesControlllers";
const routes: Router = Router();


routes.get("/", async (req: Request, res: Response) => {
  return res.status(200).json("tudo ok")
});

routes.get("/episodes", EpisodesControlllers.ViewEpisode);

routes.post("/episodes", EpisodesControlllers.insertEpisode);

routes.post("/Characters/Main", MainCharsControllers.insertMainCharacters)


routes.get("/books", async (req: Request, res: Response) => {
  try {
    const query = 'SELECT * FROM books';

    const { rows } = await pool.query(query);

    res.json(rows);

  } catch (err) {
    console.error('Erro ao executar consulta:', err);
    res.status(500).send('Erro ao executar consulta.');
  }
});

routes.get("/mainChars", async (req: Request, res: Response) => {
  try {
    const query = 'SELECT * FROM mainChars';

    const { rows } = await pool.query(query);

    res.json(rows);

  } catch (err) {
    console.error('Erro ao executar consulta:', err);
    res.status(500).send('Erro ao executar consulta.');
  }
});

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
