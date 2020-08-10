import pool from '../../config/db'
import { Message } from '../models/message.model'
import { OPEN } from 'ws'
import chat_ws from './chat_ws'

class ChatService {
    async saveMessage(text: string, userId: number, movieId: number): Promise<Message> {
        try {
            const sql = `INSERT INTO chat_message (text, "userId", "movieId")
                         VALUES ($1, $2, $3)
                         RETURNING *`
            const values = [text, userId, movieId]
            const {rows} = await pool.query(sql, values)
            return rows[0]
        } catch (e) {
            throw e
        }
    }

    async sendToAllClients(value: any) {
        chat_ws.clients.forEach(client => {
            if (client.readyState === OPEN) {
                client.send(JSON.stringify(value))
            }
        })
    }
}

export const chatService = new ChatService()
