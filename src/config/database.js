import mongoose from 'mongoose'
import constants from './constants'
import * as logger from '../helpers/logger'

//Removes the warning with promises
mongoose.Promise = global.Promise

//Connect the db with the url provided
try {
  mongoose.connect(constants.MONGO_URL)
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL)
}
mongoose.connection
  .once('open', () => logger.success('Connected Successfully to MongoDB'))
  .on('error', e => {
    throw e
  })
