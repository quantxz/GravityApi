import { Request, Response, Router } from "express";
const routes: Router = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.json("deu certo")
});

export default routes;
