const express = require('express')
require('dotenv').config()
const cors = require('cors')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const router = express.Router()
routes.forEach((route) => {
  router[route.method](route.path, route.controller)
})
app.use(router)

const startServer = async () => {
  try {
    const db = require('./services/DatabaseNoSQL.js')
    await db.connection()
    app.listen(port, () => {
      console.log(`🚀 Server is listening on port ${port}`)
    })
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error)
    process.exit(1)
  }
}

startServer()
