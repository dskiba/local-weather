import React from 'react';
import styled from 'styled-components';

const GetLocation = styled.form`
`



const Location = props => (
  <GetLocation onSubmit={props.getWeather}>
        <input type='text' name='city' placeholder='City...'/>
        <input type='text' name='country' placeholder='Country...'/>
        <button>Get Weather</button>
  </GetLocation>

)



export default Location;