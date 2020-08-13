import pool from '../../config/db'
import { Comment } from '../shared/models/comment.model'

class CommentService {
    async getMovieComments(movieId: number): Promise<Comment[]> {
        try {
            const sql = `SELECT *,
                                (
                                    SELECT row_to_json(u)
                                    FROM "user" u
                                    WHERE u.id = mc."userId"
                                ) AS "user"
                         FROM movie_comment mc
                         WHERE "movieId" = $1`
            const {rows} = await pool.query(sql, [movieId])
            return rows
        } catch (e) {
            throw e
        }
    }
}

export const commentService = new CommentService()
