import React from 'react'
import './MinuteWeatherCard.css'

const MinuteWeatherCard =(props)=> {
  const minutes = props.minutes
  console.log(`Card props-->`, minutes)
  return (
    <div style={{ color: 'black',
                  backgroundColor: 'tan',
                  height: '10vh',
                  width: '85vw',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexFlow: 'row nowrap'}}>
      <div>{minutes.time}</div>
      <div>{minutes.precipIntensity}</div>
      <div>{minutes.precipProbability}</div>
      <div>{minutes.precipType}</div>
    </div>
  )
}

export default MinuteWeatherCard;
