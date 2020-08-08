import { Pool } from 'pg'

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'movie_streaming'
})

export default pool
