require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware needs production configuration, render dynamically
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
  ? 'https://workout-buddy-vmn4.onrender.com'
  : 'http://localhost:3000', // React app URL
  credentials: true
}))

app.use(express.json())

// for debugging purposes
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// stable version
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log('connected to database')
    app.listen(process.env.PORT, () => {
      console.log('Listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })

// optimized version
// mongoose.connect(process.env.MONGO_URI, {
//   maxPoolSize: 10, // Maximum number of connections.
//   serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds.
//   socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity.
// })
//   .then(() => {
//     console.log('connected to database')
//     // listen to port
//     app.listen(process.env.PORT, () => {
//       console.log('listening for requests on port', process.env.PORT)
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   }) 