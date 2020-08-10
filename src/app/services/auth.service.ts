import pool from '../config/db'
import { User } from '../models/user.model'

class AuthService {
    async emailAndPasswordValidate(email: string, pasword: string): Promise<User> {
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
