import { Router } from "express";
import WeirdmageddonControllers from "../app/controllers/Creatures/WeirdmageddonControllers";
const WeirdmageddonRoutes: Router = Router();

WeirdmageddonRoutes.get("/Weirdmageddon/creatures", WeirdmageddonControllers.ViewWeirdmageddon);

WeirdmageddonRoutes.post("/Weirdmageddon/creatures", WeirdmageddonControllers.InsertWeirdmageddon);

export default WeirdmageddonRoutes