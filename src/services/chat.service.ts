import pool from '../config/db'
import { Message } from '../models/message.model'

class ChatService {
    async saveMessage(text: string, userId: number, movieId: number): Promise<Message> {
        const sql = `INSERT INTO chat_message (text, "userId", "movieId")
                     VALUES ($1, $2, $3)
                     RETURNING *`
        const {rows} = await pool.query(sql, [text, userId, movieId])
        return rows[0]
    }
}

export const chatService = new ChatService()
