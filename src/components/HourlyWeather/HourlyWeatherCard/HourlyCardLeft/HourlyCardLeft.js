import React from 'react'
import './HourlyCardLeft.css'
import HourlyCardLeftTop from './HourlyCardLeftTop'
import HourlyCardLeftBottom from './HourlyCardLeftBottom'

const HourlyWeatherCardLeft =(props)=> {
  const hour = props.hour
  return (
      <div  id="hourly-weather-card-left">
        <HourlyCardLeftTop hour={hour} />
        <HourlyCardLeftBottom hour={hour} />
      </div>
  )
}

export default HourlyWeatherCardLeft;
