import React, { Component } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

// Local Imports //
import Title from './Title/Title';
import Kicker from './Kicker/Kicker'
import Userform from './Form/Form';
import Link from './Link/Link';

// CSS //
const Wrapper = styled.section`
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: inherit;
    @media (max-width: 758px) and (min-height: 700px ) {
      box-sizing: content-box;
      padding: 12.5vh 0;
      /*transform: translateY(-50%);*/
      height: 75vh;
    }
  `;

export default class LandingWindow extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      toggle: false,
      position: 'right',


    }

    this.ReturningUserInfo = [];
  }

  handleClick = (event) => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    axios.post('http://localhost:4000/api/users', {
    email: this.state.email,
    password: this.state.password
  }).catch(error => {
    console.log(error);
  })
    //console.log(<this className=""></this>state.email, this.state.password);
  }
render() {
    return(
      <Wrapper>
      <Title />
      <Kicker />
      <Userform logIn={this.state.logIn} signUp={this.state.signUp} toggle={this.state.toggle} inputs={this.state.inputs} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  position={this.state.position} />
      <Link toggle={this.state.toggle} handleClick={this.handleClick}/>
    </Wrapper>
    )
  }
}
