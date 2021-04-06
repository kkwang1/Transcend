import React from 'react';
import styled from 'styled-components';

const Butt = styled.button`

  background-color: #F1F1F1;
  border: none;
  color: #1B7B89;
  padding: 33px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  text-transform: uppercase
  `;

const Button = text => {
  return (
    <Butt> text </Butt>
  )
}

export default Button;