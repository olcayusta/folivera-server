import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { join } from 'path'

const app: Application = express()

import { movieRoute } from './routes/movie.route'
import { commentRoute } from './routes/comment.route'
import { searchRoute } from './routes/search.route'
import { userRoute } from './routes/user.route'
import { genreRoute } from './routes/genre.route'

app.use(express.json())
app.use(cors())
app.use('/public', express.static(join(__dirname, 'public')))

movieRoute(app)
commentRoute(app)
searchRoute(app)
userRoute(app)
genreRoute(app)

export default app
