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
                  margin: '1vw',
                  border: 'thin solid black',
                  boxShadow: '0px 5px 20px -2px rgba(0,0,0,0.3)'}}>
      <div style={{ backgroundColor: 'lightBlue',
                    height: '100%',
                    flexBasis: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    {`:${new DateObj(minute.time).minutes}`}</div>
      <div>{minute.precipIntensity}</div>
      <div>{`${Math.round(minute.precipProbability *100)}%`}</div>
      <div>{minute.precipType}</div>
    </div>
  )
}

export default MinuteWeatherCard;
