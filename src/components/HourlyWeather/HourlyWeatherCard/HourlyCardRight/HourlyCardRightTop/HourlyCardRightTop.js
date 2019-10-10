import React from 'react'
import './HourlyCardRightTop.css'

const HourlyCardRightTop =(props)=> {
  const hour = props.hour
  return (
      <div id="precipitation-info" >
        <div>cloudCover -->{hour.cloudCover}</div>
        <div>Rainfall --> {hour.precipIntensity}</div>
        <div>Chance of Rain --> {hour.precipProbability}</div>
        <div>Precip Type --> {hour.precipType}</div>
      </div>
  )
}

export default HourlyCardRightTop;
