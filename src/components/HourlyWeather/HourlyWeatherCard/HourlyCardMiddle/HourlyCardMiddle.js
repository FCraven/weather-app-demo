import React from 'react'
import './HourlyCardMiddle.css'
import HourlyCardMiddleTop from './HourlyCardMiddleTop'
import HourlyCardMiddleBottom from './HourlyCardMiddleBottom'

const HourlyCardMiddle =(props)=> {
  const hour = props.hour
  return (
      <div id='hourly-weather-card-mid'>
        <HourlyCardMiddleTop hour={hour} />
        <HourlyCardMiddleBottom hour={hour} />
      </div>
  )
}

export default HourlyCardMiddle;
