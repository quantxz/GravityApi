import { Request, Response } from "express";
import { CreateEpisode } from "../models/episodes/insertEpisodesModel"
import { pool } from "../../configs/PG";

class episodeController {
    public async ViewEpisode(req: Request, res: Response) {
        const query = 'SELECT * FROM episodes';
    
        const { rows } = await pool.query(query);
        return res.status(200).json(rows)

    }
    
    public async insertEpisode(req: Request, res: Response) {
        const { ...data } = req.body;

        await CreateEpisode(data)

        const query = 'SELECT * FROM episodes';
        return res.json(query)
    }
}

export default new episodeController