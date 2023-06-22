import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
const routes: Router = Router();

const prisma = new PrismaClient();

routes.get("/", async (req: Request, res: Response) => {
    const episodes = await prisma.episodes.findMany();
    
    return res.json(episodes)
});

export default routes;
