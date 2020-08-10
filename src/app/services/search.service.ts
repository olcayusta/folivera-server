import pool from '../config/db'


class SearchService {
    async search(searchTerm: string) {
        const tsQuery = `${searchTerm}:*`
        const sql = `SELECT *
                     FROM movie
                     WHERE to_tsvector(title) @@ to_tsquery($1)`
        const {rows} = await pool.query(sql, [tsQuery])
        return rows
    }
}

export const searchService = new SearchService()
