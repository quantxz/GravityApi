import express from 'express';
import routes from './routes/books.routes';
import EpisodesRoute from './routes/episodes.routes';
import Charsroutes from './routes/chars.routes';
import RelativesRoutes from './routes/relatives.routes';
import BooksRoutes from './routes/books.routes';
import WeirdmageddonRoutes from './routes/Weirdmageddon.routes';
import CreaturesRoutes from './routes/creatures.routes';

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
        this.server.use(WeirdmageddonRoutes)
        this.server.use(CreaturesRoutes)
    }
}

export default new App().server;