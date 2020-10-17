import { User } from './user'

export interface Comment {
  id: number
  comment: string
  userId: number
  creationTime: Date
  movieId: number
  user: User
}
