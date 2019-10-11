import React from 'react'
import './HourlyWeather.css'
import HourlyWeatherCard from './HourlyWeatherCard'
import { Link } from 'react-router-dom'

const HourlyWeather =(props)=> {
  const hourly = props.hourly
  const hours = hourly.data;
  const summary = hourly.summary
  const icon = hourly.icon
  const hoursMap = hours.map(el => <HourlyWeatherCard hour={el} />)

  return (
    <div>
      <div style={{ display: 'flex',
                    position: 'fixed',
                    zIndex: '2',
                    justifyContent: 'space-between',
                    alignItems:'center',
                    backgroundColor: 'slateGrey',
                    height: '8vmax',
                    width: '100%',
                    fontSize: '1.8vw'
                    }}>
        <Link to='/'>Home icon goes here</Link>
        <div style={{flexBasis: 'content'}}>{summary}</div>
        <div>{icon}</div>
      </div>
    <div  id='hourly-weather-container'
          style={{  display:'flex',
                    flexFlow:'column nowrap',
                    postion: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'lightCyan',
                    height: '100%',
                    width: '100%',
                    paddingTop: '8vmax',
                    fontSize: '1.5vw' }}>

      {/* MAPS OUT HOURLY WEATHER CARDS */}
      {hoursMap}
    </div>
  </div>
  )
}

export default HourlyWeather;
