import { Request, Response, Router } from "express";
import SwaggerUi from "swagger-ui-express";
import { sql } from "@vercel/postgres";
import swaggerDocs from '../configs/swagger.json'

const routes: Router = Router();

var options = {
    explorer: true
};

routes.use('/', SwaggerUi.serve);
routes.get('/', SwaggerUi.setup(swaggerDocs, options));

export default routes;

