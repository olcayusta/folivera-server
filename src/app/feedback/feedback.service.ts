import pool from '../../config/db'
import { Feedback } from '../shared/models/feedback.model'

class FeedbackService {
  async saveFeedback(userId: number, text: string): Promise<Feedback> {
    const query = {
      text: `
                INSERT INTO feedback ("userId", text)
                VALUES ($1, $2)
                RETURNING *
            `,
      values: [userId, text]
    }
    const { rows } = await pool.query(query)
    return rows[0]
  }
}

export const feedbackService = new FeedbackService()
