import pool from '../../config/db'
import { Feedback } from '../shared/models/feedback.model'

class FeedbackService {
    async saveFeedback(userId: number, text: string): Promise<Feedback> {
        const sql = `INSERT INTO feedback ("userId", text)
                     VALUES ($1, $2)
                     RETURNING *`
        const values = [userId, text]
        const {rows} = await pool.query(sql, values)
        return rows[0]
    }
}

export const feedbackService = new FeedbackService()
