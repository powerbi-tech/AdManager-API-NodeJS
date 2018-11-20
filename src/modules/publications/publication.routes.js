import { Router } from 'express'

import * as postController from './publication.controllers'
import { authJwt } from '../../services/auth.services'

const routes = new Router()

routes.post('/', authJwt, postController.createPost)
routes.get('/:id', authJwt, postController.getPostById)
routes.get('/', authJwt, postController.getPostsList)
routes.patch('/:id', authJwt, postController.updatePost)
routes.delete('/:id', authJwt, postController.deletePost)

// Favorites
routes.post('/:id/favorite', authJwt, postController.favoritePost)

export default routes
