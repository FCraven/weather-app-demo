import React from 'react'
import './MinuteWeather.css'
import { Link } from 'react-router-dom'
import MinuteWeatherCard from './MinuteWeatherCard'

const MinuteWeather =(props)=> {

  // const minutesMap;

  return(
    <div>
      <Link to='/'>Back to Current Weather</Link>
      <div style={{ height: '10vh', backgroundColor: 'blue'}}>{props.minute.summary}</div>
      <div style={{ display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
        {/* create above minutesMap to map out the weather cards  */}
        <MinuteWeatherCard  minutes={props.minute.data}/>
      </div>
    </div>
  )
}

export default MinuteWeather;
