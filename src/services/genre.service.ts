import pool from '../config/db'
import { Genre } from '../models/genre.model'

class GenreService {
    async getAllGenres(): Promise<Genre[]> {
        const sql = `SELECT *
                     FROM genre`
        const {rows} = await pool.query(sql)
        return rows
    }
}

export const genreService = new GenreService()
