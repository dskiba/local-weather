import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Titles from "./components/Titles";
import Location from "./components/Location";
import Weather from "./components/Weather";
// import getWeather from './components/api';

 const API_KEY = '127442bab09800819fda803d2a29d315';
class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
 
  getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
  const data = await api_call.json();
  if (city && country) {
    console.log(data)
    this.setState({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
  });
}};
  

  render() {
    return (
      <div>
      <Titles/>
      <Location getWeather={this.getWeather}/>
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}        
        error={this.state.error}/>
      </div>


    );
  }
}

export default App;
