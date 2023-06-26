import { connection } from "../../../configs/connection";
import { CharsInterface } from "../../../configs/interfaces";

export const createMinorCharacters = async (data: CharsInterface) => {
    try {
        const query = `
        INSERT INTO minorschars 
        (name, first_episode, last_episode, mentions, no_lines, voice, abilities, age, born, ocuppation, inspiration, likes, dislikes, description, image) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

        const values = [
            data.name, 
            data.first_episode, 
            data.last_episode,
            data.mentions,
            data.no_lines, 
            data.voice, 
            data.abilities,
            data.age, 
            data.born, 
            data.ocuppation, 
            data.inspiration, 
            data.likes, 
            data.dislikes, 
            data.description, 
            data.image]

        return await connection.promise().query(query, values);

    } catch (err) {
        console.error('Erro ao executar consulta:', err);
    }
}