import './APITest.css'
import React, {Component} from 'react'
import axios from 'axios'
import {DARK_SKY_API_KEY} from '../../secrets'

export default class APITest extends Component {
  constructor(props) {
    super(props)

    this.state = {
       latitude: '',
       longitude: '',
       loading: true
    }
  }

  async componentDidMount() {
    const getLocation = async ()=> {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
          const { latitude, longitude } = position.coords;
          console.log(`BEFORE--->`,this.state)
          this.setState({
            latitude,
            longitude,
            loading: false
          })

          console.log(`AFTER--->`, this.state)

          const coords = {
            latitude: this.state.latitude,
            longitude: this.state.longitude
          }

          const { data } = await axios.get('/api/getWeather', coords)
          console.log('DATA----->', data)
          //axios.get(tos erver with optional object attachement that is the lat and long)
        });
      } else {
          alert("Geolocation is not supported by this browser. Please enable to use the service")
      }
    }

    try {
      getLocation()
    } catch (error) {
        console.log(error)
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
