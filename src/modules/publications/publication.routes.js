import { Router } from 'express'

import Controller from './publication.controllers'
import { authJwt } from '../../services/auth.services'

const routes = new Router()

/* Create Record */
routes.post('/', authJwt, Controller.addNewRecord)

/* Get Records */
routes.get('/', authJwt, Controller.getList)

/* Get/Edit/Delete individual record */
routes.get('/:id', authJwt, Controller.getById)
routes.patch('/:id', authJwt, Controller.updateRecord)
routes.delete('/:id', authJwt, Controller.softDeleteRecord)

/* Bulk Create Records */
routes.post('/bulk', authJwt, Controller.addNewRecord)

export default routes
