import React from 'react'
import './HourlyCardMiddleTop.css'

const HourlyCardMiddleTop =(props)=> {
  const hour = props.hour
  return (
        <div id='icon-info'>
          <div> Icon---> {hour.icon}</div>
        </div>
  )
}

export default HourlyCardMiddleTop;
