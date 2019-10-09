import React from 'react'
import './MinuteWeather.css'
import { Link } from 'react-router-dom'
import MinuteWeatherCard from './MinuteWeatherCard'

const MinuteWeather =(props)=> {

  const data = props.minute.data
  const minutesMap = data.map(el => <MinuteWeatherCard minute={el}/>)
  return(
    <div>
      <Link to='/'>Back to Current Weather</Link>
      <div style={{ height: '10vh', backgroundColor: 'blue'}}>{props.minute.summary}</div>
      <div id='minutes-map-container'>
        {minutesMap}
      </div>
    </div>
  )
}

export default MinuteWeather;
