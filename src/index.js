import express from 'express'

// Custom imports
import constants from './config/constants'

const app = express()
const PORT = constants.PORT

//Configure the middleware

//Default Route to inform the user about the service
app.get('/', (req, res) => {
  res.send('Ad Manager : API')
})

app.listen(PORT, err => {
  if (err) {
    throw err
  } else {
    console.log(`Server running on port:${PORT} 
        --> Running on ${process.env.NODE_ENV}
        --> Ready To Serve!!!....`)
  }
})
