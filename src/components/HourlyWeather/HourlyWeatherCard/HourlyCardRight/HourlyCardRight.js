import React from 'react'
import './HourlyCardRight.css'

const HourlyCardRight =(props)=> {

  const hour = props.hour;

  return (
    <div id="hourly-weather-card-right">
          <div id="precipitation-info" >
            <div>cloudCover -->{hour.cloudCover}</div>
            <div>Rainfall --> {hour.precipIntensity}</div>
            <div>Chance of Rain --> {hour.precipProbability}</div>
            <div>Precip Type --> {hour.precipType}</div>
          </div>
          <div id="atmospheric-info">
            <div>Pressure --> {hour.pressure}</div>
            <div>Visibility --> {hour.visibility}</div>
            <div>Ozone --> {hour.ozone}</div>
            <div>dewPoint --> {hour.dewPoint}</div>
          </div>
        </div>
  )
}

export default HourlyCardRight;
