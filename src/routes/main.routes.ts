import { Router } from "express";
import SwaggerUi from "swagger-ui-express";
import swaggerDocs from '../configs/swagger.json';
import "swagger-ui-dist/swagger-ui.css";

const routes: Router = Router();

routes.use('/', SwaggerUi.serve);
routes.get('/', SwaggerUi.setup(swaggerDocs));

export default routes;
