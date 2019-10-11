import React from 'react'
import './HourlyWeatherCard.css'
import HourlyCardLeft from './HourlyCardLeft'
import HourlyCardMiddle from './HourlyCardMiddle'
import HourlyCardRight from './HourlyCardRight'

const HourlyWeatherCard = (props) => {
  const hour = props.hour
  return (
    <div  className='hourly-weather-card'
          style={{  border: 'thin solid black',
                    position:'relative',
                    display: 'inline-flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
                    alignContent: 'stretch',
                    padding: '1em',
                    margin: '1em',
                    width: '80vw',
                    height: '20%',
                    backgroundColor: 'Azure',
                    overflow: 'auto'}}>

      <HourlyCardLeft hour={hour} />
      <HourlyCardMiddle hour={hour} />
      <HourlyCardRight hour={hour} />
    </div>

  )
}

export default HourlyWeatherCard;
