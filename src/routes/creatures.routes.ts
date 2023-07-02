import { Router } from "express";
import CreaturesController from "../app/controllers/Creatures/AnyCreatureControllers";
const CreaturesRoutes: Router = Router();

CreaturesRoutes.get("/Creatures", CreaturesController.ViewCreatures);

CreaturesRoutes.get("/Creatures/find/:name", CreaturesController.ViewSpecifyCreature);

CreaturesRoutes.post("/Creatures", CreaturesController.InsertCreatures);

export default CreaturesRoutes