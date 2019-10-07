import './CurrentWeather.css'
import React from 'react'

const CurrentWeather = (props) => {

  const { current, place, time } = props;
  const temperature = Math.round(current.temperature)
  const feelsLike = Math.round(current.apparentTemperature)
  const locationFilter = place.filter(el => el.types.includes('neighborhood'))

const location = locationFilter[0].formatted_address.split(',')[0]
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

  console.log(`location-->`, location)

  return (
    <section id='current-weather-container'>
      <div id='current-weather-top'>
        <div id='current-location'>{location}</div>
        <div id='current-temperature'>{temperature}°</div>
      </div>
      <div id='current-weather-sunny'></div>
      <div id='current-weather-water'>
        <div id="current-weather-sand">
          <nav id='current-weather-info-container'>
            <div className='current-weather-nav-btn'>By The Minute</div>
            <div className='current-weather-nav-btn'>On The Hour</div>
            <div className='current-weather-nav-btn'>All Day</div>
            <div className='current-weather-nav-btn'>5-Day Forecast</div>
          </nav>
        </div>
      </div>

    </section>
  )
}

export default CurrentWeather
