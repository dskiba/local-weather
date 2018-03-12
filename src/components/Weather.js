import React from 'react';
import styled from 'styled-components';

const WeatherData = styled.div`
`

const City = styled.h1`
`
const Country = styled.h2`
`

const Temperature = styled.h3`
`
const Humidity = styled.p`
`
const Desctiption = styled.p`
`
const Error = styled.p`
`



const Weather = (props) => {
  return (
    <WeatherData>
      { props.city && <City> City: {props.city} </City>}
      { props.country && <Country> Country: {props.country} </Country>}
      {props.temperature &&<Temperature>  Temperature: {props.temperature}</Temperature>}
      { props.humidity && <Humidity> Humidity: {props.humidity}</Humidity>}
      {props.desctiption && <Desctiption> Desctiption: {props.desctiption} </Desctiption>}
      {props.error && <Error> Error: {props.error} </Error>}
    </WeatherData>

  )
}

export default Weather;