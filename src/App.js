import React, { Component } from 'react';
//import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { injectGlobal } from 'styled-components';


// local imports //

import LandingWindow from './components/LandingWindow/LandingWindow';




// CSS //

injectGlobal`

  html {
  height: 100%;
  width: 100%;
  font-size: 16px;
  }

  body {
    height: inherit;
    width: inherit;
    color: white;
    font-family: 'Helvetiva', sans-serif;
    text-align: center;
    background-color: olivedrab;
  }
  button {
    color: white;
    background-color: inherit;
    display: inline-block;
    border: none;
    cursor: pointer;
    :hover {
      color: blue;
    }
    width: fit-content;
    margin: 0 auto;
  }
`;



class App extends Component {

  render() {
    return (
    <LandingWindow />
)
  }
}

export default App;
