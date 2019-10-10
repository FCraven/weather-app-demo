import React from 'react'
import './MinuteWeather.css'
import { Link } from 'react-router-dom'
import MinuteWeatherCard from './MinuteWeatherCard'

const MinuteWeather =(props)=> {

  const data = props.minute.data
  const minutesMap = data.map(el => <MinuteWeatherCard minute={el}/>)
  return(
    <section id='minute-weather-container'>
      <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between', alignItems: 'center',  color: 'white', height: '10vh', backgroundColor: 'slateGrey', position:'fixed', width: '100vw', boxShadow: '0px 0px 50px 5px rgba(0,0,0,0.65)'}}>
        <Link to='/' style={{padding: '2%'}}>Back to Current Weather</Link>
        <div style={{padding: '2%', flexBasis: '55%'}}>{props.minute.summary}</div>
      </div>
      <div  id='minutes-map-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column nowrap', paddingTop: '11vh'}}>{minutesMap}</div>
    </section>
  )
}

export default MinuteWeather;
