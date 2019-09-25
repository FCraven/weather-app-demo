const router = require('express').Router()
const axios = require('axios')
const { DARK_SKY_API_KEY } = require('./keys')
const { GOOGLE_MAPS_API_KEY } = require('./keys')


// /api/getweather
router.get('/getweather', async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query
    const { data } = await axios.get(`https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${latitude},${longitude}`)
    console.log(`getweather request success`)
    res.send(data)
  } catch (error) {
    next(error)
  }
})

// /api/getplace
router.get('/getplace', async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`)
    res.send(response.data)
  } catch (error) {
    next(error)
  }
})

module.exports = router
