import React from 'react'
import './HourlyCardMiddleBottom.css'

const HourlyCardMiddleBottom =(props)=> {
  const hour = props.hour
  return (
    <div id='wind-info' >
          <div>Wind Bearing --> {hour.windBearing}</div>
          <div>Wind Gust --> {hour.windGust}</div>
          <div>Wind Speed --> {hour.windSpeed}</div>
        </div>
  )
}

export default HourlyCardMiddleBottom;
