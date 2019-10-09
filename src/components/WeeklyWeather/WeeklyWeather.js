import React from 'react'
import './WeeklyWeather.css'
import { Link } from 'react-router-dom'

const WeeklyWeather =(props)=> {
  console.log('Weekly props -->', props)
  return(
    <div>
      <Link to='/'>Back to Current Weather</Link>
      <div>WeeklyWeather</div>
      <div>{props.weekly.summary}</div>
      <div>{props.time}</div>
    </div>
  )
}

export default WeeklyWeather;
