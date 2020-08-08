import pool from '../config/db'
import { User } from '../models/user'

class AuthService {
    async emailAndPasswordValidate(email: string, pasword: string) {
        try {
            const sql = `SELECT *
                         FROM "user"
                         WHERE email = $1
                           AND password = $2`
            const {rows} = await pool.query(sql, [email, pasword])
            return rows[0]
        } catch (e) {
            throw e
        }
    }
}

export const authService = new AuthService()
