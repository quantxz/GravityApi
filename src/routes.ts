import { Request, Response, Router } from "express";
import { pool } from "./configs/PG"
const routes: Router = Router();




routes.get("/", async (req: Request, res: Response) => {
  try {
    const query = 'SELECT * FROM episodes';
    
    const { rows } = await pool.query(query);

    res.json(rows);

  } catch (err) {
    console.error('Erro ao executar consulta:', err);
    res.status(500).send('Erro ao executar consulta.');
  }
});

export default routes;
