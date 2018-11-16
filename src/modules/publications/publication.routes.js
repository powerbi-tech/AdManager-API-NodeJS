import { Router } from 'express'
import validate from 'express-validation'

import * as publicationController from './publication.controllers'
import { authJwt } from '../../services/auth.services'
import publicationValidation from './publication.validations'

const routes = new Router()

routes.post(
  '/',
  authJwt,
  validate(publicationValidation.createPost),
  publicationController.createPost
)
routes.get('/:id', publicationController.getPostById)
routes.get('/', publicationController.getPostsList)

export default routes
/* tt */
