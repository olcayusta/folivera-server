import pool from '../../config/db'
import { Movie } from '../shared/models/movie.model'

class AccountService {
  async watchLater(): Promise<Movie[]> {
    try {
      const sql = `SELECT m.id, m.title, m.year, m."posterUrl"
                         FROM movie m
                                  INNER JOIN user_library ul ON ul."movieId" = m.id
                         WHERE "userId" = $1
                           AND vote = 'watch_later'`
      const values = [1]
      const { rows } = await pool.query(sql, values)
      return rows
    } catch (e) {
      throw e
    }
  }

  async IWatched(): Promise<Movie[]> {
    try {
      const sql = `SELECT m.id, m.title, m.year, m."posterUrl"
                         FROM movie m
                                  INNER JOIN user_library ul ON ul."movieId" = m.id
                         WHERE "userId" = $1
                           AND vote = 'i_watched'`
      const values = [1]
      const { rows } = await pool.query(sql, values)
      return rows
    } catch (e) {
      throw e
    }
  }
}

export const accountService = new AccountService()
