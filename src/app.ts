import express, { Application } from 'express'
import cors from 'cors'
import { join } from 'path'

const app: Application = express()

import { movieRoute } from './app/movie/movie.route'
import { commentRoute } from './app/comment/comment.route'
import { searchRoute } from './app/search/search.route'
import { userRoute } from './app/user/user.route'
import { genreRoute } from './app/genre/genre.route'
import { accountRoute } from './app/account/account.route'
import { feedbackRoute } from './app/feedback/feedback.route'

app.use(express.json())
app.use(cors())
app.use('/public', express.static(join(__dirname, 'public')))

movieRoute(app)
commentRoute(app)
searchRoute(app)
userRoute(app)
genreRoute(app)
accountRoute(app)
feedbackRoute(app)

export default app
