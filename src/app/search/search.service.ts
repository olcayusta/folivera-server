import pool from '../../config/db'
import { Movie } from '../shared/models/movie.model'

class SearchService {
    async search(searchTerm: string): Promise<Movie[]> {
        try {
            const tsQuery = `${searchTerm}:*`
            const sql = `SELECT *
                         FROM movie
                         WHERE to_tsvector(title) @@ to_tsquery($1)`
            const {rows} = await pool.query(sql, [tsQuery])
            return rows
        } catch (e) {
            throw e
        }
    }
}

export const searchService = new SearchService()
