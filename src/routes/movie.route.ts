import { Application, Request, Response, Router } from 'express'
import { movieService } from '../services/movie.service'
import { commentService } from '../services/comment.service'

const router: Router = Router()

export const movieRoute = (app: Application) => {
    app.use('/movies', router)

    router.get('/', async (req: Request, res: Response) => {
        try {
            const movies = await movieService.getAllMovies()
            res.json(movies)
        } catch (e) {
            throw e
        }
    })

    router.get('/:movieId', async (req: Request, res: Response) => {
        try {
            const {movieId} = req.params
            const movie = await movieService.getMovie(+movieId)
            res.json(movie)
        } catch (e) {
            throw e
        }
    })

    router.get('/:movieId/comments', async (req: Request, res: Response) => {
        try {
            const {movieId} = req.params
            const comments = await commentService.getMovieComments(+movieId)
            res.json(comments)
        } catch (e) {
            throw e
        }
    })
}
