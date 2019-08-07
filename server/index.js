const PORT = 8080;
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express()
module.exports = app

//Morgan loggin Midware
app.use(morgan())

//Body parsing Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', require('./api')); // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
