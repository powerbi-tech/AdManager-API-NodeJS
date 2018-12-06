import classifiedHeaderCaptionRoutes from './classifieds/classifiedHeaderCaptions/classifiedHeaderCaptions.routes'
import classifiedRatesRoutes from './classifieds/ClassifiedRates/ClassifiedRate.routes'
import clientRoutes from './clients/client.routes'
import postRoutes from './posts/post.routes'
import publicationRoutes from './publications/publication.routes'
import userRoutes from './users/user.routes'

/* URL Constants */
const BASE_URL = '/api/v1'
const CLASSIFIED = `${BASE_URL}/classifieds`

export default app => {
  /* Common */
  app.use(`${BASE_URL}/users`, userRoutes)
  app.use(`${BASE_URL}/publications`, publicationRoutes)
  app.use(`${BASE_URL}/clients`, clientRoutes)

  /* Ads */

  /* Classifieds */
  app.use(`${CLASSIFIED}/Rates`, classifiedRatesRoutes)
  app.use(`${CLASSIFIED}/HeaderCaptionRoutes`, classifiedHeaderCaptionRoutes)

  app.use(`${BASE_URL}/posts`, postRoutes)
}
