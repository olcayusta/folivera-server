import { Application, Request, Response, Router } from 'express'
import { feedbackService } from './feedback.service'

const router: Router = Router()

export const feedbackRoute = (app: Application) => {
    app.use('/feedbacks', router)

    // TODO
    router.post('/', async (req: Request, res: Response) => {
        const {userId, text} = req.body
        const feedback = await feedbackService.saveFeedback(userId, text)
        res.json(feedback)
    })
}
