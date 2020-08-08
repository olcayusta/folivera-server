import express, { Request, Response } from 'express'
import cors from 'cors'
import { join } from 'path'

import { movieRoute } from './routes/movie.route'
import { commentRoute } from './routes/comment.route'
import { searchRoute } from './routes/search.route'
import { userRoute } from './routes/user.route'
import { genreRoute } from './routes/genre.route'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/public', express.static(join(__dirname, 'public')))

app.get('/', async (req: Request, res: Response) => {

})

movieRoute(app)
commentRoute(app)
searchRoute(app)
userRoute(app)
genreRoute(app)

export default app
