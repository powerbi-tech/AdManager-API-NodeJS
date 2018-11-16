// load external modules
import express from 'express'

// Custom imports
import constants from './config/constants'
import middlewareConfig from './config/middlewares'
import apiRoutes from './modules'
import './config/database'
import * as logger from './helpers/logger'

const app = express()
const PORT = constants.PORT

//Configure the middleware
middlewareConfig(app)

//Default Route to inform the user about the service
app.get('/', (req, res) => {
  res.send('Ad Manager : API Services are Running Successfully!')
})

apiRoutes(app)

app.listen(PORT, err => {
  if (err) {
    throw err
  } else {
    logger.info(`Server running on port:${PORT} 
        --> Running on ${process.env.NODE_ENV}
        --> Ready To Serve!!!....`)
  }
})
