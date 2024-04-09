// import modules

import express from 'express'
import { cars } from './data/cars-data.js'

// create Express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)



// Mount routes

// app.get('/', function(req, res) {
//   res.send('<h1>hello, friend</h1>')
// })

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/cars', function(req, res) {
  res.render('cars/index', {
    cars: cars
  })
})

app.get('/', function(req, res) {
  res.redirect('/home')
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
