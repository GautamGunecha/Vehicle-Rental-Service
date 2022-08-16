require('dotenv').config()
const express = require('express')
const cors = require('cors')
const colors = require('colors')
const helmet = require('helmet')
const mongoose = require('mongoose')

const { notFound, errorHandler } = require('./middlewares/errorHandler')

const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

const db = process.env.MONGODB_URI
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => console.log('connected to mongoDB'.yellow))

app.get('/', (req, res) => res.send('Backend connected.'))

// Node Error Handler
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running at http://localhost:${port}`.blue))