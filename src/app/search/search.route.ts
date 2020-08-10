import { Application, Request, Response, Router } from 'express'
import { searchService } from './search.service'

const router: Router = Router()

export const searchRoute = (app: Application) => {
    app.use('/search', router)

    router.get('/:searchTerm', async (req: Request, res: Response) => {
        try {
            const {searchTerm} = req.params
            const movies = await searchService.search(searchTerm)
            res.json(movies)
        } catch (e) {
            throw e
        }
    })
}
