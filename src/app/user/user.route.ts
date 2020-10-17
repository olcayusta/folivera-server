import { Application, Request, Response, Router } from 'express'
import { userService } from './user.service'
import { authService } from '../auth/auth.service'
import { User } from '../shared/models/user'

const router: Router = Router()

export const userRoute = (app: Application) => {
  app.use('/users', router)

  router.get('/:userId', async (req: Request, res: Response) => {
    try {
      const { userId } = req.params
      const user = await userService.getUser(+userId)
      res.json(user)
    } catch (e) {
      throw e
    }
  })

  router.get(
    '/:userId/continue-watching',
    async (req: Request, res: Response) => {
      try {
        const { userId } = req.params
        const movies = await userService.getContinueWatchingMovies(+userId)
        res.json(movies)
      } catch (e) {
        throw e
      }
    }
  )

  router.get('/:userId/favorites', async (req: Request, res: Response) => {
    try {
      const { userId } = req.params
      const movies = await userService.getFavoriteMovies(+userId)
      res.json(movies)
    } catch (e) {
      throw e
    }
  })

  // POST
  // Create new user
  router.post('/', async (req: Request, res: Response) => {
    try {
      const { email, password, displayName, avatarUrl } = req.body
      const user = await userService.saveUser(
        email,
        password,
        displayName,
        avatarUrl
      )
      res.json(user)
    } catch (e) {
      throw e
    }
  })

  // GET
  // List favorites movies
  router.post('/favorites', async (req: Request, res: Response) => {
    try {
      const { movieId } = req.body
      const movie = await userService.saveFavorite(movieId)
      res.json(movie)
    } catch (e) {
      throw e
    }
  })

  // POST
  // Email and password authentication
  router.post('/login', async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body
      const user = await authService.emailAndPasswordValidate(email, password)
      if (user) {
        res.json(user)
      } else {
        res.sendStatus(404)
      }
    } catch (e) {
      console.log('eee')
      throw e
    }
  })
}
