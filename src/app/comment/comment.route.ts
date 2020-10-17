import { Application, Router } from 'express'

const router: Router = Router()

export const commentRoute = (app: Application) => {
  app.use('/comments', router)
}
