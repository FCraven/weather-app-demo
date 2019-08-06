const router = require('express').Router()
const axios = require('axios')
const DARK_SKY_API_KEY = require('./keys')

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


module.exports = router
