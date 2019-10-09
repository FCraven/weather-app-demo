import React from 'react';
import './DailyWeather.css'
import { Link } from 'react-router-dom'

const DailyWeather =(props)=> {
  console.log('Daily props -->', props)
  return (
    <div>
      <Link to='/'>Back to Current Weather</Link>
      <div>Daily Weather </div>
    </div>
  )
}


export default DailyWeather;
