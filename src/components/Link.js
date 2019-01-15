import React from 'react'
import styled from 'styled-components'
import {colors} from "../style/colors";
import {shadows} from "../style/shadows";

export const Link = ( {active, children, onClick,color} ) => (
  <Button
    onClick={ onClick }
    disabled={ active }
    color={color}
  >
    { children }
  </Button>
)
const Button = styled.button`
  border-radius: 20px;
  border: none;
  box-shadow: ${shadows.button};
  color: #fff;
  background-color: ${props=>props.disabled ? colors.green : colors.yellow};
  margin: 0 .2em;
  font-weight: bold;
  padding: .1em .5em;
`
