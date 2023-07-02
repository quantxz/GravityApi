import { Router } from "express";
import MainCharsControllers from "../app/controllers/Chars/MainCharsControllers";
import RecCharsControllers from "../app/controllers/Chars/RecCharsControllers";
import MinorCharsControllers from "../app/controllers/Chars/MinorCharsControllers";
const Charsroutes: Router = Router();

Charsroutes.get("/Characters/Main", MainCharsControllers.viewMainChars);//feito

Charsroutes.get("/Characters/Main/:name", MainCharsControllers.ViewSpecifyChar);//feito

Charsroutes.post("/Characters/Main", MainCharsControllers.insertMainCharacters);//feito



Charsroutes.get("/Characters/Rec", RecCharsControllers.ViewRecChars) //feito

Charsroutes.get("/Characters/Rec/:name", RecCharsControllers.ViewSpecifyChar) //feito

Charsroutes.post("/Characters/Rec", RecCharsControllers.InsertRecChars) //feito



Charsroutes.get("/Characters/Minors", MinorCharsControllers.ViewMinors) //feito

Charsroutes.get("/Characters/Minors/:name", MinorCharsControllers.ViewSpecifyChar) //feito

Charsroutes.post("/Characters/Minors", MinorCharsControllers.InsertMinors) //feito

export default Charsroutes