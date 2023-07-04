import { Request, Response, Router } from "express";
import EpisodesControlllers from "../app/controllers/episodes/EpisodesControlllers";
const EpisodesRoute: Router = Router();

EpisodesRoute.get("/episodes", EpisodesControlllers.ViewEpisode); //feito

EpisodesRoute.get("/episodes/id/:id", EpisodesControlllers.ViewSpecifyEpisodeById); //feito

EpisodesRoute.get("/episodes/title/:title", EpisodesControlllers.ViewSpecifyEpisodeByName); //feito

EpisodesRoute.post("/episodes", EpisodesControlllers.insertEpisode); //feito

export default EpisodesRoute