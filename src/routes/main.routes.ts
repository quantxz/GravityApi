import { Router } from "express";
import SwaggerUi from "swagger-ui-express";
import { SwaggerOptions } from "swagger-ui-express";
import swaggerDocs from '../configs/swagger.json';
import path from "path";

const routes: Router = Router();

const SwaggerOptions = {
  customCss: path.join(__dirname + "src/configs/swagger.css")
};

routes.use('/', SwaggerUi.serve);
routes.get('/', SwaggerUi.setup(swaggerDocs, SwaggerOptions));

export default routes;
