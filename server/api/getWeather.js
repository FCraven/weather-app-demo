const router = require('express').Router()
const axios = require('axios')
const DARK_SKY_API_KEY = require('../api/keys')
const getLocation = require('./utils')

//Mounted on getWeather
router.get('/', (req, res, next) => {
    try {
      getLocation()
      const {data} = axios.get(`https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${this.state.latitude},${this.state.longitude}`)
      console.log(data)
      res.send(data)
    } catch (error) {
        next(error)
    }
})

module.exports = router
