import { pool } from "../../../configs/PG";
import { episodesIinterface } from "../../interfaces"

export const CreateEpisode = async (data: episodesIinterface) => {

    try {

        const query = 'INSERT INTO episodes (title, "ptBr_title", first_exibition, season, directed_by, image, written_by) VALUES ($1, $2, $3, $4, $5, $6, $7)';
        const values = [data.title, data.ptBr_title, data.first_exibition, data.season, data.directed_by, data.image, data.written_by];
    
        return await pool.query(query, values);
        
    }catch (err) {
        console.error('Erro ao executar consulta:', err);
      }
}