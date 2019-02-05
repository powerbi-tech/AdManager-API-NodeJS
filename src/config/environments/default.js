export default {
  ENV_NAME: 'DEFAULT',
  PORT: process.env.PORT || 3000,
  TOKEN_VALIDITY: process.env.TOKEN_VALIDITY || 100,
  JWT_SECRET: 'thisisasecret',
  DEFAULT_PAGE_SIZE: 100,
}
