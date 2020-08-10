import pool from '../../config/db'
import { User } from '../models/user.model'

class AuthService {
    async emailAndPasswordValidate(email: string, password: string): Promise<User> {
        try {
            const sql = `SELECT *
                         FROM "user"
                         WHERE email = $1
                           AND password = $2`
            const values = [email, password]
            const {rows} = await pool.query(sql, values)
            return rows[0]
        } catch (e) {
            throw e
        }
    }
}

export const authService = new AuthService()
