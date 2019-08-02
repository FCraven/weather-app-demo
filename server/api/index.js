const router = require('express').Router()

router.use('/getWeather', require('./getWeather'))

module.exports = router
