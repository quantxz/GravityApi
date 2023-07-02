import { Router } from "express";
import SwaggerUi from "swagger-ui-express";
import 'swagger-ui-dist'
import swaggerDocs from '../configs/swagger.json';
import "./src/configs/swagger.css"; // Substitua pelo caminho correto para o arquivo CSS

const routes: Router = Router();

routes.use('/', SwaggerUi.serve);
routes.get('/', SwaggerUi.setup(swaggerDocs));

export default routes;
