import './WeatherContainer.css'
import React, { Component } from 'react'
// import { DateObj } from '../../utils'
import axios from 'axios';
import CurrentWeather from '../CurrentWeather'


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
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

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

        console.log(`client response to Google-->`, results)
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
        console.log(this.state)
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
    return (
      <div style={{ height: '100vw', width: '100vh' }}>
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
            <CurrentWeather />
            <div>Latitude: {this.state.latitude}</div>
            <div>Longitude: {this.state.longitude}</div>
            <div>Time: {this.state.currentTime}</div>
          </div>
        }
      </div>
    )
  } //end render
} //end component


