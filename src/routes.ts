import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
const routes: Router = Router();

routes.get("/", async (req: Request, res: Response) => {
    const episodes = await PrismaClient.episodes.findMany()
    
    return res.json(episodes)
});

export default routes;
