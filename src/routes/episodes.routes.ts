import { Request, Response, Router } from "express";
import EpisodesControlllers from "../app/controllers/EpisodesControlllers";
const EpisodesRoute: Router = Router();

EpisodesRoute.get("/episodes", EpisodesControlllers.ViewEpisode); //feito

EpisodesRoute.post("/episodes", EpisodesControlllers.insertEpisode); //feito

export default EpisodesRoute