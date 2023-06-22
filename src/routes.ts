import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
const routes: Router = Router();

routes.get("/", async (req: Request, res: Response) => {
    
    return res.json("episodes")
});

export default routes;
