import React from 'react'
import './HourlyCardLeftBottom.css'

const HourlyCardLeftBottom =(props)=> {
  const hour = props.hour
  return (
      <div id='temperature-info'>
          <div>Feels Like Temp --> {hour.apparentTemperature}</div>
            <div>
              <div>Actual Temperature --> {hour.temperature}</div>
            <div>
              <div>Humidity --> {hour.humidity}</div>
              <div>UVIndex --> {hour.uvIndex}</div>
            </div>
          </div>
        </div>
  )
}

export default HourlyCardLeftBottom;
