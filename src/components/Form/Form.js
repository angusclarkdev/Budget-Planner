import React from 'react';
import styled from 'styled-components';
import { Form, Button, Menu, Segment  } from 'semantic-ui-react';


// CSS //

const Wrapper = styled.section`

margin: 2rem auto;
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: center;
padding: 1rem 1rem;
`;


const Userform = (props) => {
  return (
    <Wrapper>
      <Menu tabular attached='top'>
        <Menu.Item name='Sign Up' position={props.position} active={props.activeItem === 'Sign Up'} onClick={props.activeItem === 'Log In' ? props.handleClick : null}   />
          <Menu.Item name='Log In' active={props.activeItem === 'Log In'} onClick={props.activeItem === 'Sign Up' ? props.handleClick : null} />
      </Menu>
      <Segment attached='bottom'>
        <Form>
          { props.visible && <Form.Input name='firstname' type='text' placeholder='First name' onChange={props.handleChange} />}
          { props.visible && <Form.Input name='lastname' type='text' placeholder='Last name' onChange={props.handleChange} />}
          <Form.Input name='email' type='email' icon={props.visible || 'lock'} placeholder='E-mail' onChange={props.handleChange} />
          <Form.Input name='password' type='password' icon={props.visible || 'user'} placeholder='Password' onChange={props.handleChange} />
          <Button fluid primary content={props.activeItem} />
        </Form>

      </Segment>
</Wrapper>
  )
}
export default Userform;
