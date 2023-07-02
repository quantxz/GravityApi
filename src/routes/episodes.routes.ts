import { Request, Response, Router } from "express";
import EpisodesControlllers from "../app/controllers/episodes/EpisodesControlllers";
const EpisodesRoute: Router = Router();

EpisodesRoute.get("/episodes", EpisodesControlllers.ViewEpisode); //feito

EpisodesRoute.get("/episodes/find/:id", EpisodesControlllers.ViewSpecifyEpisodeById); //feito

EpisodesRoute.get("/episodes/find/:name", EpisodesControlllers.ViewSpecifyEpisodeByName); //feito

EpisodesRoute.post("/episodes", EpisodesControlllers.insertEpisode); //feito

export default EpisodesRoute