import React from 'react'
import './HourlyWeatherCard.css'

const HourlyWeatherCard =(props)=> {
  const hour = props.hour
  return (
    <div style={{border: 'thin solid black'}}>
      <div>Apparent Temp --> {hour.apparentTemperature}</div>
      <div>cloudCover -->{hour.cloudCover}</div>
      <div>dewPoint --> {hour.dewPoint}</div>
      <div>Humidity --> {hour.humidity}</div>
      <div>Icon --> {hour.icon}</div>
      <div>Ozone --> {hour.ozone}</div>
      <div id="precipitation">
        <div>PrecipIntensity --> {hour.precipIntensity}</div>
        <div>PrecipProbability --> {hour.precipProbability}</div>
        <div>Precip Type --> {hour.precipType}</div>
      </div>
      <div>Pressure --> {hour.pressure}</div>
      <div>Summary --> {hour.summary}</div>
      <div>Temperature --> {hour.temperature}</div>
      <div>UNIX Time --> {hour.time}</div>
      <div>UVIndex --> {hour.uvIndex}</div>
      <div>Visibility --> {hour.visibility}</div>
      <div id='wind-info'>
        <div>Wind Bearing --> {hour.windBearing}</div>
        <div>Wind Gust --> {hour.windGust}</div>
        <div>Wind Speed --> {hour.windSpeed}</div>
      </div>
    </div>

  )
}

export default HourlyWeatherCard;
