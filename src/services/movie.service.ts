import { MovieModel } from '../models/movie.model'
import pool from '../config/db'

class MovieService {
    async getAllMovies(): Promise<MovieModel[]> {
        try {
            const sql = `SELECT *
                         FROM movie
                         ORDER BY id DESC`
            const {rows} = await pool.query(sql)
            return rows
        } catch (e) {
            throw e
        }
    }

    async getMovie(movieId: number): Promise<MovieModel> {
        try {
            const sql = `SELECT *
                         FROM movie
                         WHERE id = $1`
            const {rows} = await pool.query(sql, [movieId])
            return rows[0]
        } catch (e) {
            throw e
        }
    }

    async getMovieComments(movieId: number): Promise<Comment[]> {
        try {
            const sql = `SELECT *
                         FROM movie_comment
                         WHERE "movieId" = $1`
            const {rows} = await pool.query(sql, [movieId])
            return rows
        } catch (e) {
            throw e
        }
    }
}

export const movieService = new MovieService()