import { pool } from "../../../configs/PG";
import { mainCharsInterface } from "../../interfaces";

export const createMainCharacters = async (data: mainCharsInterface) => {
    try {
        const query = "INSERT INTO mainchars (name, first_episode, last_episode, voice, age, born, ocuppation, inspiration, likes, dislikes, description, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)"
        const values = [data.name, data.first_episode, data.last_episode, data.voice, data.age, data.born, data.ocuppation, data.inspiration, data.likes, data.dislikes, data.description, data.image]

        return await pool.query(query, values)

    } catch (err) {
        console.error('Erro ao executar consulta:', err);
    }
}