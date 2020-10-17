import { Movie } from '../shared/models/movie.model'
import pool from '../../config/db'

class MovieService {
  async getAllMovies(): Promise<Movie[]> {
    try {
      const sql = `SELECT *
                         FROM movie
                         ORDER BY id DESC`
      const { rows } = await pool.query(sql)
      return rows
    } catch (e) {
      throw e
    }
  }

  async getMovie(movieId: number): Promise<Movie> {
    try {
      const sql = `SELECT *
                         FROM movie
                         WHERE id = $1`
      const values = [movieId]
      const { rows } = await pool.query(sql, values)
      return rows[0]
    } catch (e) {
      throw e
    }
  }

  async getMovieComments(movieId: number): Promise<Comment[]> {
    try {
      const sql = `SELECT mc.*,
                                (
                                    SELECT row_to_json(u)
                                    FROM "user" u
                                    WHERE u.id = mc."userId"
                                ) AS "user"
                         FROM movie_comment mc
                         WHERE "movieId" = 1`
      const values = [movieId]
      const { rows } = await pool.query(sql, values)
      return rows
    } catch (e) {
      throw e
    }
  }
}

export const movieService = new MovieService()
