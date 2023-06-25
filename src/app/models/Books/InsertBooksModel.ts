import { connection } from "../../../configs/connection";
import { BooksInterface } from "../../../configs/interfaces";

export const CreateBook = async (data: BooksInterface) => {
    try {
        const query = `
        INSERT INTO books 
        (title, titleBr, format, formatBr, mainGenre, mainGenreBr, pages, published, publishedBr, rating, ratingBr, author, image) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

        const values = [
            data.title, 
            data.titleBr,
             data.format, 
             data.formatBr, 
             data.mainGenre, 
             data.mainGenreBr, 
             data.pages, 
             data.published, 
             data.publishedBr, 
             data.rating, 
             data.ratingBr, 
             data.author, 
             data.image]
    
        return await connection.promise().query(query, values);
        
    } catch (err) {
        console.error('Erro ao executar consulta:', err);
    }
}