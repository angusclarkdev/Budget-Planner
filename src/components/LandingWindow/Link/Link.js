import React from 'react';
//import styled from 'styled-components';



// CSS //


const Link = (props) => {
  return (
  <button value='Sign Up' onClick={props.handleClick}> {props.toggle ? 'Log In' : 'Sign Up'}
  </button>
  )
}
export default Link;
