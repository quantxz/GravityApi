import { Request, Response } from "express";
import { CreateRelatives } from "../../models/relatives/MainCharsRealatives";

class MainCharsRealatives {
    public async viewMainRealatives(req: Request, res: Response) {}

    public async insertMainCharsRealatives(req: Request, res: Response) {
        const { ...data } = req.body;

        await CreateRelatives(data)

        return res.status(200).json("tudo ok")

    }
}

export default new MainCharsRealatives