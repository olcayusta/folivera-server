import pool from '../config/db'
import { Comment } from '../models/comment.model'

class CommentService {
    async getMovieComments(movieId: number): Promise<Comment[]> {
        const sql = `SELECT *
                     FROM movie_comment
                     WHERE "movieId" = $1`
        const {rows} = await pool.query(sql, [movieId])
        return rows
    }
}

export const commentService = new CommentService()
