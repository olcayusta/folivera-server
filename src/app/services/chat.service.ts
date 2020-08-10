import pool from '../../config/db'
import { Message } from '../models/message.model'

class ChatService {
    async saveMessage(text: string, userId: number, movieId: number): Promise<Message> {
        try {
            const sql = `INSERT INTO chat_message (text, "userId", "movieId")
                         VALUES ($1, $2, $3)
                         RETURNING *`
            const values = [text, userId, movieId];
            const {rows} = await pool.query(sql, values)
            return rows[0]
        } catch (e) {
            throw e
        }
    }
}

export const chatService = new ChatService()
