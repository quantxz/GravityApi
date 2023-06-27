import { sql } from "@vercel/postgres";
import { BooksInterface } from "../../../configs/interfaces";

export const CreateBook = async (data: BooksInterface) => {
    try {
        const query = sql`
            INSERT INTO books 
            (title, titleBr, format, formatBr, mainGenre, mainGenreBr, pages, published, publishedBr, rating, ratingBr, author, image) 
            VALUES 
            (${data.title}, ${data.titleBr}, ${data.format}, ${data.formatBr}, ${data.mainGenre}, ${data.mainGenreBr}, ${data.pages}, ${data.published}, ${data.publishedBr}, ${data.rating}, ${data.ratingBr}, ${data.author}, ${data.image})
        `;

        const { rows } = await query;
        return rows;
        
    } catch (err) {
        console.error('Erro ao executar consulta:', err);
    }
}