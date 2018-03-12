import React from 'react';
import styled from 'styled-components';
import { Col, Row, Grid} from 'react-flexbox-grid';

const Box = styled.div`
position: relative;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
margin-top: 50px;
height: 800px;
width: 400px;
background: url('https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/free-psd-iphone-mockup-templates.jpg') no-repeat center;
`

const Menu = styled.header`
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 100px;
width : 100px;
height: 100px;
background-color: tomato;
`

export default () => (
  <React.Fragment>
    <Box>
      <Menu>123</Menu>
    </Box>
  </React.Fragment>
);
