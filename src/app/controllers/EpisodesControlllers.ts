import { Request, Response } from "express";
import { CreateEpisode } from "../models/episodes/insertEpisodesModel"
import { connection } from "../../configs/connection";

class episodeController {
    public async ViewEpisode(req: Request, res: Response) {
        try {
            const query = 'SELECT * FROM episodes';
    
            const queryResults = await connection.promise().query(query);
            return res.status(200).json(queryResults[0])

        } catch(err) {
            return res.status(500).json(err)
        }

    }
    
    public async insertEpisode(req: Request, res: Response) {
        try {
            const { ...data } = req.body;

            await CreateEpisode(data)
    
            const query = 'SELECT * FROM episodes';
            const queryResults = await connection.promise().query(query);
            
            return res.status(200).json(queryResults[0])

        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default new episodeController