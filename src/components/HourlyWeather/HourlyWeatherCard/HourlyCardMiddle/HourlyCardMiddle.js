import React from 'react'
import './HourlyCardMiddle.css'

const HourlyCardMiddle =(props)=> {
  const hour = props.hour
  return (
      <div id='hourly-weather-card-mid'>
        <div> Icon---> {hour.icon}</div>
        <div id='wind-info' >
          <div>Wind Bearing --> {hour.windBearing}</div>
          <div>Wind Gust --> {hour.windGust}</div>
          <div>Wind Speed --> {hour.windSpeed}</div>
        </div>
      </div>
  )
}

export default HourlyCardMiddle;
