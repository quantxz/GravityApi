import { Request, Response, Router } from "express";
import SwaggerUi from "swagger-ui-express";
import { sql } from "@vercel/postgres";
import swaggerDocs from '../configs/swagger.json'

const routes: Router = Router();

var options = {
    customCss: '.swagger-ui .topbar { display: block }'
};

routes.use('/', SwaggerUi.serve);
routes.get('/', SwaggerUi.setup(swaggerDocs, options));

export default routes;

