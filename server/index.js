require('dotenv').config()
const express = require('express')
const cors = require('cors')
const colors = require('colors')
const helmet = require('helmet')

const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => res.send('Backend connected.'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running at http://localhost:${port}`.blue))