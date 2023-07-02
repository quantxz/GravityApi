import { Router } from "express";
import SwaggerUi from "swagger-ui-express";
import 'swagger-ui-dist'
import swaggerDocs from '../configs/swagger.json'; // Substitua pelo caminho correto para o arquivo CSS
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";

const routes: Router = Router();

const swaggerOptions = {
  customCss: `@charset "UTF-8";
    .swagger-ui html{box-sizing:border-box}
    .swagger-ui *,.swagger-ui :after,.swagger-ui :before{box-sizing:inherit}
    .swagger-ui body{margin:0;background:#fafafa}
    .swagger-ui .wrapper{width:100%;max-width:1460px;margin:0 auto;padding:0 20px}
    .swagger-ui .opblock-tag-section{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}
    .swagger-ui .opblock-tag{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 20px 10px 10px;cursor:pointer;-webkit-transition:all .2s;transition:all .2s;border-bottom:1px solid rgba(59,65,81,.3);-webkit-box-align:center;-ms-flex-align:center;align-items:center}
    .swagger-ui .opblock-tag:hover{background:rgba(0,0,0,.02)}
    .swagger-ui .opblock-tag{font-size:24px;margin:0 0 5px;font-family:Titillium Web,sans-serif;color:#3b4151}
    .swagger-ui .opblock-tag.no-desc span{-webkit-box-flex:1;-ms-flex:1;flex:1}
    .swagger-ui .opblock-tag svg{-webkit-transition:all .4s;transition:all .4s}
    .swagger-ui .opblock-tag small{font-size:14px;font-weight:400;padding:0 10px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:Open Sans,sans-serif;color:#3b4151}
    .swagger-ui .parameter__type{font-size:12px;padding:5px 0;font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151}
    .swagger-ui .view-line-link{position:relative;top:3px;width:20px;margin:0 5px;cursor:pointer;-webkit-transition:all .5s;transition:all .5s}
    .swagger-ui .opblock{margin:0 0 15px;border:1px solid #000;border-radius:4px;box-shadow:0 0 3px rgba(0,0,0,.19)}
    .swagger-ui .opblock.is-open .opblock-summary{border-bottom:1px solid #000}
    .swagger-ui .opblock .opblock-section-header{padding:8px 20px;background:hsla(0,0%,100%,.8);box-shadow:0 1px 2px rgba(0,0,0,.1)}
    .swagger-ui .opblock .opblock-section-header,.swagger-ui .opblock .opblock-section-header label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}
    .swagger-ui .opblock .opblock-section-header label{font-size:12px;font-weight:700;margin:0;font-family:Titillium Web,sans-serif;color:#3b4151}
    .swagger-ui .opblock .opblock-section-header label span{padding:0 10px 0 0}
    .swagger-ui .opblock .opblock-section-header .opblock-title{font-size:16px;font-weight:600;margin:0 0 5px;font-family:Titillium Web,sans-serif;color:#3b4151}
    .swagger-ui .opblock .opblock-section-header .opblock-title small{font-size:14px;font-weight:400}
    .swagger-ui .opblock .opblock-summary-method{font-size:18px;font-weight:700;margin:0;padding:4px 10px 4px 0;min-width:100px;text-align:right;color:#3b4151}
    .swagger-ui .opblock .opblock-summary-path{font-size:14px;font-weight:400;padding:2px 0 0 10px;margin:0;font-family:Open Sans,sans-serif;color:#3b4151}
    .swagger-ui .opblock .opblock-summary-description{font-size:14px;font-weight:400;padding:10px 20px 10px 0;margin:0;font-family:Open Sans,sans-serif;color:#3b4151}
    .swagger-ui .tab {margin-left: 20px;}
    .swagger-ui .loading-container{background:#fff}
    .swagger-ui .btn{font-size:14px;font-weight:700;border-radius:3px;outline:0;background-color:#f25c54;color:#fff;text-align:center;padding:7px 14px;cursor:pointer;-webkit-transition:background-color .2s;transition:background-color .2s}
    .swagger-ui .btn:hover{background-color:#f14133}
    .swagger-ui .authorization__btn{border-radius:3px;padding:0 10px;background-color:rgba(0,0,0,.05);font-weight:700;margin-left:5px;height:30px;line-height:30px;cursor:pointer}
    .swagger-ui .expand-methods{-webkit-transition:all .4s;transition:all .4s}
    .swagger-ui .expand-methods:hover{opacity:.6}
    .swagger-ui .expand-operation{-webkit-transition:all .4s;transition:all .4s}
    .swagger-ui .expand-operation:hover{opacity:.6}`,
};

const ui = SwaggerUIBundle({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: "#swagger-ui",
  deepLinking: true,
  presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
  plugins: [SwaggerUIBundle.plugins.DownloadUrl],
  layout: "StandaloneLayout",
  ...swaggerOptions,
});

routes.use('/', SwaggerUi.serve);
routes.get('/', SwaggerUi.setup(swaggerDocs, swaggerOptions, ui));

export default routes;
