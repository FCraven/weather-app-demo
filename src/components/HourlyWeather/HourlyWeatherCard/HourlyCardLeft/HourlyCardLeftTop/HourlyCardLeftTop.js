import React from 'react'
import './HourlyCardLeftTop.css'

const HourlyCardLeftTop =(props)=> {
  const hour = props.hour
  return (
      <div  id="time-info">
        <div>UNIXTime===> {hour.time}</div>
      </div>
  )
}

export default HourlyCardLeftTop;
