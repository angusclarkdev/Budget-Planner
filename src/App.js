import React, { Component } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { injectGlobal } from 'styled-components';


// local imports //

import Title from './components/Title';
import Kicker from './components/Kicker';
import LandingWindow from './components/LandingWindow';
import Footer from './components/Footer';

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
    color: hotpink;
    font-family: 'Helvetiva', sans-serif;
    text-align: center;
  }
`;

const Wrapper = styled.section`
  width: inherit;
  background-color: greenyellow;
  `;

class App extends Component {

  render() {
    return (
  <Wrapper>

    <Title />
    <Kicker />
    <LandingWindow />
    <Footer />

  </Wrapper>
)
  }
}

export default App;
