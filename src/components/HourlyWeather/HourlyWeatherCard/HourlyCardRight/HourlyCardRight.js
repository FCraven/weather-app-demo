import React from 'react'
import './HourlyCardRight.css'
import HourlyCardRightTop from './HourlyCardRightTop'
import HourlyCardRightBottom from './HourlyCardRightBottom'

const HourlyCardRight =(props)=> {

  const hour = props.hour;

  return (
    <div id="hourly-weather-card-right">
      <HourlyCardRightTop hour={hour} />
      <HourlyCardRightBottom hour={hour} />
    </div>
  )
}

export default HourlyCardRight;
