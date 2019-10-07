import './CurrentWeather.css'
import React from 'react'

const CurrentWeather = (props) => {

  const { current, place, time } = props;
  const temperature = Math.round(current.temperature)
  const feelsLike = Math.round(current.apparentTemperature)

  const navBtnObj = {
    minute: {

    },
    hour: {

    },
    day: {

    },
    week: {

    }
  }

  console.log(`PROPS -->`, props)


  return (
    <section id='current-weather-container'>
      <div id='current-weather-top'>
        <div id='current-temperature'>{temperature}°</div>
      </div>
      <div id='current-weather-sunny'></div>
      <div id='current-weather-water'>
        <div id="current-weather-sand">
          <nav id='current-weather-info-container'>
            <div class='current-weather-nav-btn'>By The Minute</div>
            <div class='current-weather-nav-btn'>On The Hour</div>
            <div class='current-weather-nav-btn'>All Day</div>
            <div class='current-weather-nav-btn'>5-Day Forecast</div>
          </nav>
        </div>
      </div>

    </section>
  )
}

export default CurrentWeather
