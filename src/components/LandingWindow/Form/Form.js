import React from 'react';
import styled from 'styled-components';
import { Form, Button, /*Menu, Segment*/  } from 'semantic-ui-react';



// CSS //

const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: center;
padding: 1rem 1rem;
box-sizing: border-box;
@media (min-width: 600px) {
  width: 70%;
  align-self: center;
  background-color: white;
}
`;


const Userform = (props) => {
  return (
    <Wrapper>
      {/*<Menu tabular attached='top'>
        <Menu.Item name='Sign Up' position={props.position} active={props.activeItem === 'Sign Up'} onClick={props.activeItem === 'Log In' ? props.handleClick : null}   />
          <Menu.Item name='Log In' active={props.activeItem === 'Log In'} onClick={props.activeItem === 'Sign Up' ? props.handleClick : null} />
      </Menu>
      <Segment attached='bottom'> */}
        <Form onSubmit={props.handleSubmit}>
          { props.toggle && <Form.Input name='firstname' type='text' placeholder='First name' onChange={props.handleChange} />}
          { props.toggle && <Form.Input name='lastname' type='text' placeholder='Last name' onChange={props.handleChange} />}
          <Form.Input name='email' type='email' icon={props.toggle || 'user'} iconPosition={props.toggle || 'left'} placeholder='E-mail' onChange={props.handleChange} />
          <Form.Input name='password' type='password' icon={props.toggle || 'lock'} iconPosition={props.toggle || 'left'} placeholder='Password' onChange={props.handleChange} />
          <Button type='submit' fluid primary content={props.toggle ? 'Sign Up' : 'Log In' } />
        </Form>
</Wrapper>
  )
}
export default Userform;
