import React from 'react'
import './HourlyCardRightBottom.css'

const HourlyCardRightBottom =(props)=> {
  const hour = props.hour
  return (
    <div id="atmospheric-info">
      <div>Pressure --> {hour.pressure}</div>
      <div>Visibility --> {hour.visibility}</div>
      <div>Ozone --> {hour.ozone}</div>
      <div>dewPoint --> {hour.dewPoint}</div>
    </div>
  )
}

export default HourlyCardRightBottom;
