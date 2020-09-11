import { Pool } from 'pg'

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    database: 'folivera'
})

pool.query('SELECT NOW()').then(({rows}) => {
    console.log('Postgres ok...')
})

pool.on('error', (err, client) => {
    console.log(err)
})

export default pool
