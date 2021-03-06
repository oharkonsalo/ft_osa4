const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')



app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogsRouter)
const mongoUrl = 'mongodb://pekkis:pekkis@ds149138.mlab.com:49138/osa4'
mongoose.connect(mongoUrl)



const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})