import React, {Component} from 'react';
import styled from 'styled-components';
import { Form, Button, Menu, Segment  } from 'semantic-ui-react';


// CSS //

const Wrapper = styled.section`
width: 40%;
background-color: white;
margin: 2rem auto;
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: center;
padding: 1rem 1rem;
`;


export default class Userform extends Component {
  state = {
    activeItem: 'Log In',
    buttonText: 'Log In',
    Inputs: [
      {name: 'Sign up', position: 'right'}
    ]
  }

  handleItemClick = (e, { name }) => this.setState({
     activeItem: name,
     buttonText: name
   })

  render() {

  return (
    <Wrapper>
      <Menu tabular attached='top'>
        <Menu.Item name='Sign Up' position='right' active={this.state.activeItem === 'Sign Up'} onClick={this.handleItemClick} />
          <Menu.Item name='Log In'  active={this.state.activeItem === 'Log In'} onClick={this.handleItemClick} />
      </Menu>
      <Segment attached='bottom'>
<Form>
  <Form.Input type='email' icon="user" iconPosition='left' placeholder='E-mail address' />
  <Form.Input type='password' icon='lock' iconPosition='left' placeholder='Password' />
  <Button primary content={this.state.buttonText} fluid  />
</Form>
</Segment>
</Wrapper>

  )
}
}
