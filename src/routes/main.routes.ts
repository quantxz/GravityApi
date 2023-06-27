import { Response, Router } from "express";
import { sql } from "@vercel/postgres";

const routes: Router = Router();

routes.get("/", async (res: Response) => {
    try {
        const query = 'SELECT * FROM episodes';
        const { rows } = await sql.query(query);
        
        return res.status(200).json(rows);

    } catch (err) {
        console.error('Error while executing query:', err);
        return res.status(500).json(err);
    }
});

export default routes;

