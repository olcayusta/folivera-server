import { Application, Request, Response, Router } from 'express'

const router: Router = Router()

export const feedbackRoute = (app: Application) => {
    app.use('feedback', router)

    // TODO
    app.post('/', async (req: Request, res: Response) => {

    })
}
