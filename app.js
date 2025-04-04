const express = require('express')
require('dotenv').config()
const cors = require('cors')
const routes = require('./routes')
const router = express.Router()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

routes.forEach((route) => {
  router[route.method](route.path, route.handler)
})

app.listen(3000, () => {
  console.log(`server is listening on port ${port}`)
})
