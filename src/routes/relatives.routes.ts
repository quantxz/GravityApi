import { Router } from "express";
import MainCharsRealativesControllers from "../app/controllers/relatives/MainCharsRealatives.Controllers";
import RecCharsRelativesController from "../app/controllers/relatives/RecCharsRelatives.controller";
import MinorCharsRelativesController from "../app/controllers/relatives/MinorCharsRelatives.Controller";
const RelativesRoutes: Router = Router();



RelativesRoutes.get("/Relatives/MainChars", MainCharsRealativesControllers.ViewRelations) //feito

RelativesRoutes.get("/Relatives/MainChars/id/:id", MainCharsRealativesControllers.ViewRelations) //feito

RelativesRoutes.get("/Relatives/MainChars/name/:name", MainCharsRealativesControllers.ViewRelations) //feito

RelativesRoutes.post("/Relatives/MainChars", MainCharsRealativesControllers.InsertRelations); //feito


RelativesRoutes.get("/Relatives/RecChars", RecCharsRelativesController.ViewRelations) //feito

RelativesRoutes.get("/Relatives/RecChars/id/:id", RecCharsRelativesController.ViewRelations) //feito

RelativesRoutes.get("/Relatives/RecChars/name/:name", RecCharsRelativesController.ViewRelations) //feito

RelativesRoutes.post("/Relatives/RecChars", RecCharsRelativesController.InsertRelations) //feito


RelativesRoutes.get("/Relatives/MinorChars", MinorCharsRelativesController.ViewRelations) //feito

RelativesRoutes.get("/Relatives/MinorChars/id/:id", MinorCharsRelativesController.ViewRelations) //feito

RelativesRoutes.get("/Relatives/MinorChars/name/:name", MinorCharsRelativesController.ViewRelations) //feito

RelativesRoutes.post("/Relatives/MinorChars", MinorCharsRelativesController.InsertRelations) //feito


export default RelativesRoutes