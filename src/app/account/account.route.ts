import { Application, Request, Response, Router } from 'express'
import { accountService } from './account.service'

const router: Router = Router()

export const accountRoute = (app: Application) => {
    app.use('/me', router)

    router.get('/watchlater', async (req: Request, res: Response) => {
        try {
            const movies = await accountService.watchLater()
            res.json(movies)
        } catch (e) {
            throw e
        }
    })

    router.get('/watched', async (req: Request, res: Response) => {
        try {
            const movies = await accountService.IWatched()
            res.json(movies)
        } catch (e) {
            throw e
        }
    })
}
