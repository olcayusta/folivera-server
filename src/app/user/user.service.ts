import { Movie } from '../shared/models/movie.model'

import pool from '../../config/db'
import { User } from '../shared/models/user'

class UserService {
  async getUser(userId: number): Promise<User> {
    try {
      const query = {
        text: `
                    SELECT *
                    FROM "user"
                    WHERE id = $1
                `,
        values: [userId]
      }
      const { rows } = await pool.query(query)
      return rows[0]
    } catch (e) {
      throw e
    }
  }

  async saveUser(
    email: string,
    password: string,
    displayName: string,
    avatarUrl: string
  ): Promise<User> {
    try {
      const sql = `
                INSERT INTO "user" (email, password, "displayName", "avatarUrl")
                VALUES ($1, $2, $3, $4)
                RETURNING *`
      const { rows } = await pool.query(sql, [
        email,
        password,
        displayName,
        avatarUrl
      ])
      return rows[0]
    } catch (e) {
      throw e
    }
  }

  async getContinueWatchingMovies(userId: number): Promise<Movie[]> {
    /* const sql = `SELECT *
                                                                                          FROM user_continue_watching
                                                                                          WHERE "userId" = $1`
                                                                             const {rows} = await pool.query(sql, [userId])
                                                                             return rows*/

    try {
      const sql = `
                SELECT *
                FROM movie
                ORDER BY id DESC
                LIMIT 4
            `
      const { rows } = await pool.query(sql)
      return rows
    } catch (e) {
      throw e
    }
  }

  async getFavoriteMovies(userId: number): Promise<Movie[]> {
    try {
      const query = {
        text: `
                    SELECT m.*
                    FROM movie m
                             INNER JOIN user_favorite uf on m.id = uf."movieId"
                    WHERE "userId" = $1
                `,
        values: [userId]
      }
      const { rows } = await pool.query(query)
      return rows
    } catch (e) {
      throw e
    }
  }

  async saveFavorite(movieId: number): Promise<Movie> {
    try {
      const query = {
        text: `
                    INSERT INTO user_favorite ("movieId", "userId")
                    VALUES ($1, $2)
                    RETURNING *
                `,
        values: [movieId, 1]
      }
      const { rows } = await pool.query(query)
      return rows[0]
    } catch (e) {
      throw e
    }
  }
}

export const userService = new UserService()
