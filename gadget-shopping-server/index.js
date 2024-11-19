const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

const port = process.env.PORT || 4000

// Middlewares
app.use(cors())
app.use(express.json())

// MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb')
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b1zc0hy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

const dbConnect = async () => {
  try {
    await client.connect()
    console.log('Database Connected')
  } catch (error) {
    console.log(error.name, error.message)
  }
}
dbConnect()

// API
app.get('/', (req, res) => {
  res.send('Gadget Shopping Server is Running')
})

app.listen(port, () => {
  console.log(`Server is Running or Port: ${port}`)
})
