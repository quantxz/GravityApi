import { Router } from "express";
import SwaggerUi from "swagger-ui-express";
import { SwaggerOptions } from "swagger-ui-express";
import swaggerDocs from '../configs/swagger.json';
import "swagger-ui-dist";
; // Substitua pelo caminho correto para o arquivo CSS

const routes: Router = Router();

const SwaggerOptions = {
    swaggerOptions: {
      theme: 'default', 
    },
};

routes.use('/', SwaggerUi.serve);
routes.get('/', SwaggerUi.setup(swaggerDocs, SwaggerOptions));

export default routes;
