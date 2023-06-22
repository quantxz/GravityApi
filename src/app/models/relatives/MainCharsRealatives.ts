import { pool } from "../../../configs/PG";
import { mainCharsRelativesInterface } from "../../interfaces";

export const CreateRelatives = async (data: mainCharsRelativesInterface) => {
    try {
        const query = 'INSERT INTO maincharsrelatives (parents, sister_or_brother, grandfather, great_grandfather_or_great_grandmother, granduncle, ex_grandaunt_in_law, great_niece_or_great_nephew, nephew_or_niece_in_law, ex_wife, ancestor, maternal_cousin, maternal_grandfather, maternal_grandmother, characternam") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)'

        const values = [
            data.parents || "", 
            data.sister_or_brother || "", 
            data.grandfather || "", 
            data.great_grandfather_or_great_grandmother || "", 
            data.granduncle || "", 
            data.ex_grandaunt_in_law || "", 
            data.great_niece_or_great_nephew || "", 
            data.nephew_or_niece_in_law || "", 
            data.ex_wife || "", 
            data.ancestor || "", 
            data.maternal_cousin || "", 
            data.maternal_grandfather || "", 
            data.maternal_grandmother || "", 
            data.charactername || ""
        ]

        return await pool.query(query, values)

    } catch (err) {
        console.error('Erro ao executar consulta:', err);
    }
}