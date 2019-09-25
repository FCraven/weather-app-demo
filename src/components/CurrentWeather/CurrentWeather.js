import './CurrentWeather.css'
import React from 'react'

const CurrentWeather = (props) => {

  // const current = props.currentWeather;
  // const time = props.time;
  // const place = props.place
  // const temperature = Math.round(current.temperature)
  // const feelsLike = Math.round(current.apparentTemperature)

  return (
    <section id='current-weather-container'>
      <div id='current-weather-top'>
        <div id='current-weather-icon'></div>
      </div>
      <div id='current-weather-bottom'></div>
    </section>
  )
}

export default CurrentWeather
