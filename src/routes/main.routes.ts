import { Request, Response, Router } from "express";
import SwaggerUi from "swagger-ui-express";
import { sql } from "@vercel/postgres";
import swaggerDocs from '../configs/swagger.json'

const routes: Router = Router();

routes.get("/", SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));
 
export default routes;

