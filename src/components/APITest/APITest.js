import './APITest.css'
import React, { Component } from 'react'
import axios from 'axios';



export default class APITest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: '',
      longitude: '',
      data: {},
      loading: true
    }
  }

 async componentDidMount() {
    const getLocation =async ()=> {
      const success =async (position)=> {
        const { data } = await axios.get('api/getweather', {
          params: {
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString()
          },
          // proxy: {
          //   host:'http://localhost:8080',
          //   port: 8080
          // }
        })
        this.setState({
          data,
          loading: false
        })
        console.log(`this.state ----> `, this.state)
      }
      const error =(err)=> {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      await navigator.geolocation.getCurrentPosition(success, error)
    }

    try {
      getLocation();
    } catch (error) {
        console.log(error)
    }
  }

  render() {
    return (
      <div>
        {this.state.loading ?
          <div style={{ backgroundColor: 'red' }}>Loading...</div>
          :
          <div>
            <div>Latitude: {this.state.latitude}</div>
            <div>Longitude: {this.state.longitude}</div>
          </div>
        }
      </div>
    )
  }
}
