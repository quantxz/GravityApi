import { Request, Response, Router } from "express";
import SwaggerUi from "swagger-ui-express";
import "swagger-ui-dist/swagger-ui.css";
import { sql } from "@vercel/postgres";
import swaggerDocs from '../configs/swagger.json'

const routes: Router = Router();

const swaggerOptions = {
    swaggerOptions: {
      // Defina as opções do Swagger UI, incluindo o tema de estilo pré-definido
      theme: 'feeling-blue', // Substitua "some-predefined-theme" pelo nome do tema desejado
    },
  };

routes.use('/', SwaggerUi.serve);
routes.get('/', SwaggerUi.setup(swaggerDocs, swaggerOptions));

export default routes;

