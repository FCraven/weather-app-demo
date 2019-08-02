const getLocation =()=> {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      console.log(`BEFORE--->`,this.state)
      this.setState({
        latitude,
        longitude,
        loading: false
      })
      console.log(`AFTER--->`, this.state)
    });
  } else {
    alert("Geolocation is not supported by this browser. Please enable to use the service")
  }
}

module.exports = getLocation
