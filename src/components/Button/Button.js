import React from "react";
import styled from "styled-components";

const Butt = styled.button`
  background-color: #f1f1f1;
  border: none;
  color: #1b7b89;
  padding: 33px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  margin: 4px 10px;
  cursor: pointer;
  border-radius: 10px;
  text-transform: uppercase;
  width: 200px
`;

const Button = (props) => {
  return (
    <Butt>
      {props.title} 
    </Butt>
  );
};

export default Button;
