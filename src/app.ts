import express, { Response } from 'express';
const  helmet = require("helmet")
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger/jsons/swagger.json';
import EpisodesRoute from './routes/episodes.routes';
import Charsroutes from './routes/chars.routes';
import RelativesRoutes from './routes/relatives.routes';
import BooksRoutes from './routes/books.routes';
import WeirdmageddonRoutes from './routes/Weirdmageddon.routes';
import CreaturesRoutes from './routes/creatures.routes';
import routes from './routes/main.routes';
import path from 'path';

const options = {
  customCssUrl: 'https://gf-db-transfer-quantxz.vercel.app/style.css',
  customSiteTitle: "The Words That I Know API - Swagger"
};

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.static('src'));
    this.server.use(express.static('Public'));
    this.server.use(helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", 'data:', 'https://www.google-analytics.com'],
        scriptSrc: ["'self'", "'unsafe-inline'", 'https://www.google-analytics.com'],
      },
    }));
    this.server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs, options));
  }

  private routes() {
    this.server.use(routes);
    this.server.use(EpisodesRoute);
    this.server.use(Charsroutes);
    this.server.use(RelativesRoutes);
    this.server.use(BooksRoutes);
    this.server.use(WeirdmageddonRoutes);
    this.server.use(CreaturesRoutes);
  }
}

const app = new App().server;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/style.css', (req, res) => {
  res.type('text/css');
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/index.html'));
});

export default app;
