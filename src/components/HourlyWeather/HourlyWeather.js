import React from 'react'
import './HourlyWeather.css'
import HourlyWeatherCard from './HourlyWeatherCard'
import { Link } from 'react-router-dom'

const HourlyWeather =(props)=> {
  console.log('Hourly props -->', props)
  const hourly = props.hourly
  const hours = hourly.data;
  const summary = hourly.summary
  const icon = hourly.icon
  const hoursMap = hours.map(el => <HourlyWeatherCard hour={el} />)

  return (
    <div  id='hourly-weather-container'
          style={{  display:'flex',
                    flexFlow:'column nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'lightCyan' }}>

      <div style={{ display: 'flex',
                    justifyContent: 'space-between',
                    alignItems:'center'}}>
        <Link to='/'>Home icon goes here</Link>
        <div>{icon}</div>
        <div>{summary}</div>
      </div>
      <div id='hours-map-container'>
        {hoursMap}
      </div>
    </div>
  )
}

export default HourlyWeather;
