import './WeatherContainer.css'
import React, { Component } from 'react'
import axios from 'axios';

export default class WeatherContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
      loading: true
    }
  }//end constructor

  async componentDidMount() {

    //getLocation function calls for geolocation coordinates
    const getLocation = async () => {

      //success handler
      const success = async (position) => {
        const { data } = await axios.get('/api/getweather', {
          //adding lat and long from postion.coords to req
          params: {
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString()
          }
        })

        //destructure keys off of data object to set on state
        const { currently, daily, flags, hourly, minutely, latitude, longitude, offset, timezone } = data

        this.setState({
          currently,
          daily,
          flags,
          hourly,
          minutely,
          latitude,
          longitude,
          offset,
          timezone,
          loading: false
        })
      }//end success

      //Error handling for rejection case
      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      //call to navigator for coordinates
      await navigator.geolocation.getCurrentPosition(success, error)
    }//end getLocation

    //run get location
    try {
      getLocation();
    } catch (error) {
        console.log(error)
    }
  }//end componentDidMount

  render() {
    const convert =(unixTimestamp)=> {
      // Months array
      const months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      // Convert timestamp to milliseconds
      const date = new Date(unixTimestamp * 1000);
      // Year
      const year = date.getFullYear();
      // Month
      const month = months_arr[date.getMonth()];
      // Day
      const day = date.getDate();
      // Hours
      const hours = date.getHours();
      // Minutes
      const minutes = "0" + date.getMinutes();
      // Seconds
      const seconds = "0" + date.getSeconds();
      // Display date time in MM-dd-yyyy h:m:s format
      const convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      console.log(date)
      return convdataTime

     }

    return (
      <div>
        {this.state.loading ?
          <div style={{ backgroundColor: 'red' }}>Loading...</div>
          :
          <div>
            <div>Latitude: {this.state.latitude}</div>
            <div>Longitude: {this.state.longitude}</div>
            <div>Time: {convert(this.state.currently.time)}</div>
          </div>
        }
      </div>
    )
  } //end render
} //end component


