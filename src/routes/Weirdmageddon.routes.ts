import { Router } from "express";
import WeirdmageddonControllers from "../app/controllers/Creatures/WeirdmageddonControllers";
const WeirdmageddonRoutes: Router = Router();

WeirdmageddonRoutes.get("/Creatures/Weirdmageddon", WeirdmageddonControllers.ViewWeirdmageddon);

WeirdmageddonRoutes.get("/Creatures/Weirdmageddon/find/:name", WeirdmageddonControllers.ViewSpecifyCreature);

WeirdmageddonRoutes.post("/Creatures/Weirdmageddon", WeirdmageddonControllers.InsertWeirdmageddon);

export default WeirdmageddonRoutes