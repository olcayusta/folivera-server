import pool from '../../config/db'
import { Genre } from '../shared/models/genre.model'

class GenreService {
    async getAllGenres(): Promise<Genre[]> {
        try {
            const sql = `SELECT *
                         FROM genre`
            const {rows} = await pool.query(sql)
            return rows
        } catch (e) {
            throw e
        }
    }
}

export const genreService = new GenreService()
