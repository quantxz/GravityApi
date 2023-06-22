import { Request, Response, Router } from "express";
import { knexPg }   from "./configs/knexConfig";
const routes: Router = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.json(knexPg('episodes').select("*"))
});

export default routes;
