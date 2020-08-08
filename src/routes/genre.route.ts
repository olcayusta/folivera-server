import { Application, Request, Response, Router } from 'express'
import { genreService } from '../services/genre.service'

const router: Router = Router()

export const genreRoute = (app: Application) => {
    app.use('/genres', router)

    router.get('/', async (req: Request, res: Response) => {
        try {
            const genres = await genreService.getAllGenres()
            res.json(genres)
        } catch (e) {
            throw e
        }
    })
}
