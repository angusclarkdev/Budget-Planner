import React, { Component } from 'react';
//import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

// Local Imports //
import Userform from './Form/Form';

export default class LandingWindow extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      visible: false,
      position: 'right',
      activeItem: 'Log In',

    }
    
    this.ReturningUserInfo = [];
  }

  handleClick = (event, {name}) => {
    this.setState({
        activeItem: name,
        visible: !this.state.visible
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
render() {
    return(
      <Userform logIn={this.state.logIn} signUp={this.state.signUp} visible={this.state.visible} inputs={this.state.inputs} handleClick={this.handleClick}  handleChange={this.handleChange} buttonText={this.state.buttonText} position={this.state.position} activeItem={this.state.activeItem}  />
    )
  }
}
