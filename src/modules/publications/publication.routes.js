import { Router } from 'express'

import  Controller from './publication.controllers'
import { authJwt } from '../../services/auth.services'

const routes = new Router()

routes.post('/', authJwt, Controller.addNewRecord)
routes.get('/:id', authJwt, Controller.getById)
routes.get('/', authJwt, Controller.getList)
routes.patch('/:id', authJwt, Controller.updateRecord)
routes.delete('/:id', authJwt, Controller.deleteRecord)



export default routes
