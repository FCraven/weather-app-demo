import React from 'react'
import './HourlyCardLeftTop.css'

const HourlyCardLeftTop =(props)=> {
  const hour = props.hour
  return (
      <div  id="time-info"
            style={{
              position: 'relative',
              height: '50%',
              border: '2px red solid'
            }}>
        <div>UNIXTime===> {hour.time}</div>
      </div>
  )
}

export default HourlyCardLeftTop;
