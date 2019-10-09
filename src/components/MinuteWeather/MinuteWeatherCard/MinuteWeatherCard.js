import React from 'react'
import './MinuteWeatherCard.css'
import DateObj from '../../../utils'

const MinuteWeatherCard =(props)=> {
  const minute = props.minute
  console.log(`minute weather card props --->`, props)
  return (

    <div style={{ color: 'black',
                  backgroundColor: 'lightYellow',
                  height: '10vh',
                  width: '85vw',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexFlow: 'row nowrap',
                  margin: '1vw'}}>
      <div style={{ backgroundColor: 'lightBlue',
                    height: '100%',
                    padding: ''}}>
                    {`: ${new DateObj(minute.time).minutes}`}
                    </div>
      <div>{minute.precipIntensity}</div>
      <div>{`${minute.precipProbability *100}%` }</div>
      <div>{minute.precipType}</div>
    </div>
  )
}

export default MinuteWeatherCard;
