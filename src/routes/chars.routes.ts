import { Router } from "express";
import MainCharsControllers from "../app/controllers/Chars/MainCharsControllers";
import RecCharsControllers from "../app/controllers/Chars/RecCharsControllers";
import MinorCharsControllers from "../app/controllers/Chars/MinorCharsControllers";
const Charsroutes: Router = Router();

Charsroutes.get("/Characters/Main", MainCharsControllers.viewMainChars);//feito

Charsroutes.post("/Characters/Main", MainCharsControllers.insertMainCharacters);//feito

Charsroutes.get("/Characters/Main/:name", MainCharsControllers.ViewSpecifyChar);//feito


Charsroutes.get("/Characters/Rec", RecCharsControllers.ViewRecChars) //feito

Charsroutes.post("/Characters/Rec", RecCharsControllers.InsertRecChars) //feito


Charsroutes.get("/Characters/Minors", MinorCharsControllers.ViewMinors) //feito

Charsroutes.post("/Characters/Minors", MinorCharsControllers.InsertMinors) //feito

export default Charsroutes