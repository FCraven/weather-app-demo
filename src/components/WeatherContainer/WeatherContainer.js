import './WeatherContainer.css'
import React, { Component } from 'react'
// import { DateObj } from '../../utils'
import axios from 'axios';
import CurrentWeather from '../CurrentWeather'
import MinuteWeather from '../MinuteWeather'
import HourlyWeather from '../HourlyWeather'
import DailyWeather from '../DailyWeather'
import WeeklyWeather from '../WeeklyWeather'
import {Switch, Route} from 'react-router-dom'

export default class WeatherContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTime: '',
      currently: {},
      daily: {},
      flags: {},
      hourly: {},
      latitude: 0,
      longitude: 0,
      minutely: {},
      offset: 0,
      timezone: '',
      data: {},
      loading: true,
      place: []
    }
    this.tick = this.tick.bind(this)
  }//end constructor


  async componentDidMount() {
    //sets a function to call tick() every second to keep time relatively accurate
    this.timerID = setInterval(() => this.tick(),1000);

    //getLocation function calls for geolocation coordinates
    const getLocation = async () => {
      //success handler
      const success = async (position) => {
        const latitude = position.coords.latitude.toString()
        const longitude = position.coords.longitude.toString()
        const { data } = await axios.get('/api/getweather', {
          //adding lat and long from postion.coords to req
          params: { latitude, longitude }
        })
        const response = await axios.get('/api/getplace', {
          params: { latitude, longitude }
        })
        const { results } = response.data
console.log(`data--->`,data)

        //destructure keys off of data object to set on state
        const { currently, daily, flags, hourly, minutely, offset, timezone } = data

        //set state to response from Dark Sky API
        await this.setState({
          currently,
          daily,
          flags,
          hourly,
          minutely,
          latitude,
          longitude,
          offset,
          timezone,
          loading: false,
          place: results
        })

      }//end success

      //Error handling for rejection case
      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      //call to navigator for coordinates
      navigator.geolocation.getCurrentPosition(success, error)
    }//end getLocation


    //run get location
    try {
      getLocation()
    } catch (error) {
        console.log(error)
    }
  }//end componentDidMount

  componentWillUnmount() {
    //removes setInterval timer
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString()
    })
  }

  render() {
    //  const dateObj = new DateObj(this.state.currently.time)
    console.log('DAILY STATE--->', this.state.daily)
    return (
      <div style={{ height: '100%', width: '100%' }}>

      {this.state.loading ?
          <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'skyBlue',
          height: '100vh',
          width: '100vw',
          color: 'yellow',
          fontSize: '3em',
          fontWeight: '5',
          position: 'relative'
          }}>Loading...</div>
          :

          <div>
            <Switch>
              <Route  exact path='/'
                      render={()=> <CurrentWeather current={this.state.currently}
                                                    time={this.state.currentTime}
                                                    place={this.state.place}/>}/>
              <Route path='/minute'
                    render={()=> <MinuteWeather minute={this.state.minutely}
                                                time={this.state.currentTime}
                                                place={this.state.place} />}/>
              <Route path='/hourly'
                    render={()=> <HourlyWeather hourly={this.state.hourly}
                                                time={this.state.currentTime}
                                                place={this.state.place}/>}/>
              <Route path='/daily'
                    render={()=> <DailyWeather daily={this.state.daily}
                                                time={this.state.currentTime}
                                                place={this.state.place}/>}/>
              <Route path='/forecast'
                    render={()=> <WeeklyWeather weekly={this.state.daily}
                                                time={this.state.currentTime}
                                                place={this.state.place}/>}/>
            </Switch>
          </div>

      }


      </div>
    )
  } //end render

} //end component

