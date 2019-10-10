import React from 'react'
import './HourlyWeatherCard.css'

const HourlyWeatherCard = (props) => {
  const hour = props.hour
  return (
    <div className='hourly-weather-card'
      style={{
        border: 'thin solid black',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: '1em',
        margin: '1em',
        width: '80vw',
        height: '40vh',
        backgroundColor: 'Azure',
        overflow: 'auto'
      }}>


      {/* CARD LEFT */}
      <div id="hourly-weather-card-left">
        {/* time info top left */}
        <div  id="time-info" >
          <div>UNIXTime===> {hour.time}</div>
        </div>
        {/* temperature info bottom left */}
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
      </div>


      {/* CARD MID */}
      <div id='hourly-weather-card-mid'>
        <div> Icon---> {hour.icon}</div>
        <div id='wind-info' >
          <div>Wind Bearing --> {hour.windBearing}</div>
          <div>Wind Gust --> {hour.windGust}</div>
          <div>Wind Speed --> {hour.windSpeed}</div>
        </div>
      </div>

      {/* CARD RIGHT */}
      <div id="hourly-weather-card-right">
          <div id="precipitation-info" >
            <div>cloudCover -->{hour.cloudCover}</div>
            <div>Rainfall --> {hour.precipIntensity}</div>
            <div>Chance of Rain --> {hour.precipProbability}</div>
            <div>Precip Type --> {hour.precipType}</div>
          </div>
          <div id="atmospheric-info">
            <div>Pressure --> {hour.pressure}</div>
            <div>Visibility --> {hour.visibility}</div>
            <div>Ozone --> {hour.ozone}</div>
            <div>dewPoint --> {hour.dewPoint}</div>
          </div>
        </div>
      </div>

  )
}

export default HourlyWeatherCard;
