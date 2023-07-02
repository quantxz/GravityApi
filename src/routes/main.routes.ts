import { Router } from "express";
import SwaggerUi from "swagger-ui-express";
import 'swagger-ui-dist'
import swaggerDocs from '../configs/swagger.json'; // Substitua pelo caminho correto para o arquivo CSS

const routes: Router = Router();

const swaggerOptions = {
  customCss: '.swagger-ui .topbar { background-color: #ffffff; color: #000000; }',
};

routes.use('/', SwaggerUi.serve);
routes.get('/', SwaggerUi.setup(swaggerDocs, swaggerOptions));

export default routes;
