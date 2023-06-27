import { Request, Response } from "express";
import { sql } from "@vercel/postgres";
import { CreateEpisode } from "../../models/episodes/insertEpisodesModel";

class EpisodeController {
    public async ViewEpisode(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM episodes';
            const { rows } = await sql.query(query);
            
            return res.status(200).json(rows);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
    
    public async insertEpisode(req: Request, res: Response) {
        try {
            const data = req.body;
            await CreateEpisode(data);
    
            const query = 'SELECT * FROM episodes';
            const { rows } = await sql.query(query);
            
            return res.status(200).json(rows);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new EpisodeController();
