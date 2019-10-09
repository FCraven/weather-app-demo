import React from 'react'
import './HourlyWeather.css'
import { Link } from 'react-router-dom'

const HourlyWeather =(props)=> {
  console.log('Hourly props -->', props)
  return (
    <div>
      <Link to='/'>Back to Current Weather</Link>
      <div>HourlyWeather</div>
    </div>
  )
}

export default HourlyWeather;
