const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')

const app = express()

// middleware
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs')

// database connection
const dbURI =
  'mongodb+srv://ankit:Ankit007@cluster0.kvooz.mongodb.net/node-auth'
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000, console.log('Connected')))
  .catch((err) => console.log(err))

// routes
app.get('/', (req, res) => res.render('home'))
app.get('/smoothies', (req, res) => res.render('smoothies'))
app.use(authRoutes)
