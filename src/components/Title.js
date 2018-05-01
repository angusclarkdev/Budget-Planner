import React from 'react';
import styled from 'styled-components';

// CSS //

const TL = styled.section`
  h1 {
  /*  text-shadow: 0px 1px 1px black; */
  }
`;
const Title = () => {
  return (
    <TL>
    <h1> Money Manager </h1>
  </TL>
  )
}

export default Title;
