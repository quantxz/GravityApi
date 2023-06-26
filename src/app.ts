import express from 'express';
import routes from './routes/books.routes';
import EpisodesRoute from './routes/episodes.routes';
import Charsroutes from './routes/chars.routes';
import RelativesRoutes from './routes/relatives.routes';
import BooksRoutes from './routes/books.routes';

class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.server.use(express.json())
    }

    private routes() {
        this.server.use(routes)
        this.server.use(EpisodesRoute)
        this.server.use(Charsroutes)
        this.server.use(RelativesRoutes)
        this.server.use(BooksRoutes)
    }
}

export default new App().server;