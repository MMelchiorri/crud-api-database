const express = require('express')
require('dotenv').config()
const cors = require('cors')
const routes = require('./routes')
const router = express.Router()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

routes.forEach((route) => {
  console.log(route)
  router[route.method](route.path, [route.controller])
})
