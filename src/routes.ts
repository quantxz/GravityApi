import { Request, Response, Router } from "express";
import app from "./app";
const routes: Router = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        message: "tudo ok"
    })
});

export default routes;
