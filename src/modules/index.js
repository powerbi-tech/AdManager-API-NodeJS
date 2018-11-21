import userRoutes from './users/user.routes'
import { authJwt } from '../services/auth.services'
import publicationRoutes from './publications/publication.routes'
import clientRoutes from './clients/client.routes'
import postRoutes from './posts/post.routes'

export default app => {
  app.use('/api/v1/users', userRoutes)
  app.use('/api/v1/publications', publicationRoutes)
  app.use('/api/v1/clients', clientRoutes)
  app.use('/api/v1/posts', postRoutes)
  app.get('/hello', authJwt, (req, res) => {
    res.send('This is a private route!!!!')
  })
}
