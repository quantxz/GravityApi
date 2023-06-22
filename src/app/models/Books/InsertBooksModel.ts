import { pool } from "../../../configs/PG";
import { BooksInterface } from "../../interfaces";

export const CreateBook = async (data: BooksInterface) => {
    try {
        const query = 'INSERT INTO books (title, "titleBr", format, "formatBr", "mainGenre", "mainGenreBr", pages, published, "publishedBr", rating, "ratingBr", author, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'

        const values = [data.title, data.titleBr, data.format, data.formatBr, data.mainGenre, data.mainGenreBr, data.pages, data.published, data.publishedBr, data.rating, data.ratingBr, data.author, data.image]
    
        return await pool.query(query, values)
        
    } catch (err) {
        console.error('Erro ao executar consulta:', err);
    }
}