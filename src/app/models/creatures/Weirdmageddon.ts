import { sql } from "@vercel/postgres";
import { AnyCreatureInterface } from "../../../configs/interfaces";

export const CreateWeirdCreatures = async (data: AnyCreatureInterface) => {
    try {
        const query = sql`
            INSERT INTO weirdmageddoncreatures 
            (name, first_episode, last_episode, mentions, no_lines, voice, species,
            abilities, inspiration, fate, quote, description, image) 
            VALUES 
            (${data.name}, ${data.first_episode}, ${data.last_episode}, ${data.mentions}, ${data.no_lines}, ${data.voice}, ${data.species},
            ${data.abilities}, ${data.inspiration}, ${data.fate}, ${data.quote}, ${data.description}, ${data.image})
        `;

        const { rows } = await query;
        return rows;

    } catch(err) {
        console.error(err);
    }
}
