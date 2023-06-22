import { Request, Response, Router } from "express";
import { pool } from "./configs/PG"
const routes: Router = Router();


routes.get("/", async (req: Request, res: Response) => {
  return res.status(200).json("tudo ok")
});

routes.get("/episodes", async (req: Request, res: Response) => {
  try {
    const query = 'SELECT * FROM episodes';

    const { rows } = await pool.query(query);

    res.json(rows);

  } catch (err) {
    console.error('Erro ao executar consulta:', err);
    res.status(500).send('Erro ao executar consulta.');
  }
});

routes.post("/episodes", async (req: Request, res: Response) => {
  try {
    const { title, ptBr_title, first_exibition, season, directed_by, image, written_by } = req.body;

    const query = 'INSERT INTO episodes (title, ptBr_title, first_exibition, season, directed_by, image, written_by) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const values = [title, ptBr_title, first_exibition, season, directed_by, image, written_by];

    const data = await pool.query(query, values);

    res.json(data);

  } catch (err) {
    console.error('Erro ao executar consulta:', err);
    res.status(500).send('Erro ao executar consulta.');
  }
});


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
