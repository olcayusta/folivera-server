import { Pool } from 'pg'

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'movie_streaming'
})

pool.query('SELECT NOW()').then(({rows}) => {
    console.log('Postgres ok...')
})

pool.on('error', (err, client) => {
    console.log(err)
})

export default pool
