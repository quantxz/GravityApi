import { sql } from "@vercel/postgres";
import { episodesInterface } from "../../../configs/interfaces";

export const CreateEpisode = async (data: episodesInterface) => {
  try {
    const query = sql`
      INSERT INTO episodes 
      (title, "ptBr_title", first_exibition, season, directed_by, image, written_by)
      VALUES 
      (${data.title}, ${data.ptBr_title}, ${data.first_exibition}, ${data.season}, ${data.directed_by}, ${data.image}, ${data.written_by})
    `;

    const { rows } = await query;
    return rows;
  } catch (err) {
    console.error('Erro ao executar consulta:', err);
  }
}
