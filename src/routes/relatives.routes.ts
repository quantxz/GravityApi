import { Router } from "express";
import MainCharsRealativesControllers from "../app/controllers/relatives/MainCharsRealatives.Controllers";
import RecCharsRelativesController from "../app/controllers/relatives/RecCharsRelatives.controller";
import MinorCharsRelativesController from "../app/controllers/relatives/MinorCharsRelatives.Controller";
const RelativesRoutes: Router = Router();



RelativesRoutes.get("/Relatives/MainChars", MainCharsRealativesControllers.ViewRelations) //feito

RelativesRoutes.post("/Relatives/MainChars", MainCharsRealativesControllers.InsertRelations); //feito

RelativesRoutes.get("/Relatives/RecChars", RecCharsRelativesController.ViewRelations) //feito

RelativesRoutes.post("/Relatives/RecChars", RecCharsRelativesController.InsertRelations) //feito

RelativesRoutes.get("/Relatives/MinorChars", MinorCharsRelativesController.ViewRelations) //feito

RelativesRoutes.post("/Relatives/MinorChars", MinorCharsRelativesController.InsertRelations) //feito


export default RelativesRoutes