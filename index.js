const express = require('express')
const app = express()

const logger = require('./logger')

const db = require('./database')

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(logger())

app.listen(PORT, async () => {
  try{
    await db.testConnection().then(() => console.log('Connected to the database.'))
    console.log('Server is on and listening on port: ' + PORT)
  } catch (e) {
    console.log(e)
  }
})