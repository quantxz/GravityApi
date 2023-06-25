import { Request, Response, Router } from "express";
import mainCharsController from "./app/controllers/MainCharsControllers";
import EpisodesControlllers from "./app/controllers/EpisodesControlllers";
import BooksControllers from "./app/controllers/BooksControllers";
import MainCharsRealatives from "./app/controllers/relatives/MainCharsRealatives.Controllers";
import RecCharsRelativesController from "./app/controllers/relatives/RecCharsRelatives.controller";
import RecCharsControllers from "./app/controllers/RecCharsControllers";
const routes: Router = Router();


routes.get("/", async (req: Request, res: Response) => {
  return res.status(200).json("tudo ok")
});

routes.get("/episodes", EpisodesControlllers.ViewEpisode); //feito

routes.post("/episodes", EpisodesControlllers.insertEpisode); //feito

routes.get("/Characters/Main", mainCharsController.viewMainChars);//feito

routes.post("/Characters/Main", mainCharsController.insertMainCharacters);//feito

routes.get("/books", BooksControllers.ViewBooks); //feito

routes.post("/books", BooksControllers.InsertBook); //feito

routes.get("/Characters/Rec", RecCharsControllers.ViewRecChars) //feito

routes.post("/Characters/Rec", RecCharsControllers.InsertRecChars) //feito

routes.get("/Relatives/MainChars", MainCharsRealatives.viewMainRealatives) //feito

routes.post("/Relatives/MainChars", MainCharsRealatives.insertMainCharsRealatives); //feito

routes.get("/Relatives/RecChars", RecCharsRelativesController.ViewRelatives)

routes.post("/Relatives/RecChars", RecCharsRelativesController.InsertRelations)

export default routes;
