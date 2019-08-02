const PORT = 8080;
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express()
module.exports = app

app.use(morgan('default'))

//Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./api'))

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  res.send('Hello World')
})

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
