import React from 'react'
import styled from 'styled-components'
import { colors } from "../style/colors";
import { shadows } from "../style/shadows";

export const Todo = ( {completed, title, task, handleComplete, handleEdit, handleRemove} ) => {
  return (
    <TodoContainer>
      <Check onChange={ handleComplete } type="checkbox" checked={ completed }/>
      <Title onChange={ handleEdit } type='text' value={ title }/>
      <Task onChange={ handleEdit } type='text' value={ task }/>
      <Remove onClick={ handleRemove }>
        <img
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9Ii0zMSAwIDUxMiA1MTIiIHdpZHRoPSIxNnB4Ij48cGF0aCBkPSJtMTUwIDQyMWM4LjI4NTE1NiAwIDE1LTYuNzE0ODQ0IDE1LTE1di0xODBjMC04LjI4NTE1Ni02LjcxNDg0NC0xNS0xNS0xNXMtMTUgNi43MTQ4NDQtMTUgMTV2MTgwYzAgOC4yODUxNTYgNi43MTQ4NDQgMTUgMTUgMTV6bTAgMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im0yMjUgNDIxYzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTV2LTE4MGMwLTguMjg1MTU2LTYuNzE0ODQ0LTE1LTE1LTE1cy0xNSA2LjcxNDg0NC0xNSAxNXYxODBjMCA4LjI4NTE1NiA2LjcxNDg0NCAxNSAxNSAxNXptMCAwIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0ibTMwMCA0MjFjOC4yODUxNTYgMCAxNS02LjcxNDg0NCAxNS0xNXYtMTgwYzAtOC4yODUxNTYtNi43MTQ4NDQtMTUtMTUtMTVzLTE1IDYuNzE0ODQ0LTE1IDE1djE4MGMwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtNDM1IDEyMGgtMjAuNzMwNDY5bC0yNS44NTU0NjktNTEuNzA3MDMxYy0yLjUzOTA2Mi01LjA4MjAzMS03LjczMDQ2OC04LjI5Mjk2OS0xMy40MTQwNjItOC4yOTI5NjloLTc1di00NWMwLTguMjg1MTU2LTYuNzE0ODQ0LTE1LTE1LTE1aC0xMjBjLTguMjg1MTU2IDAtMTUgNi43MTQ4NDQtMTUgMTV2NDVoLTc1Yy01LjY4MzU5NCAwLTEwLjg3NSAzLjIxMDkzOC0xMy40MTc5NjkgOC4yOTI5NjlsLTI1Ljg1MTU2MiA1MS43MDcwMzFoLTIwLjczMDQ2OWMtOC4yODUxNTYgMC0xNSA2LjcxNDg0NC0xNSAxNXM2LjcxNDg0NCAxNSAxNSAxNWgzMS4xOTE0MDZsMjguODU5Mzc1IDM0OC4yMzgyODFjLjY0NDUzMSA3Ljc3NzM0NCA3LjE0NDUzMSAxMy43NjE3MTkgMTQuOTQ5MjE5IDEzLjc2MTcxOWgyNzBjNy44MDQ2ODggMCAxNC4zMDQ2ODgtNS45ODQzNzUgMTQuOTQ5MjE5LTEzLjc2MTcxOWwyOC44NTkzNzUtMzQ4LjIzODI4MWgxLjEwMTU2MmMuMDM1MTU2IDAgLjA2NjQwNi4wMDM5MDYuMTAxNTYzLjAwMzkwNi4wMTk1MzEgMCAuMDM5MDYyLS4wMDM5MDYuMDU4NTkzLS4wMDM5MDZoMjkuOTI5Njg4YzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTVzLTYuNzE0ODQ0LTE1LTE1LTE1em0tMjU1LTkwaDkwdjMwaC05MHptLTk1LjczMDQ2OSA2MGgyODEuNDYwOTM4bDE1IDMwaC0zMTEuNDYwOTM4em0yNjEuOTIxODc1IDM5MmgtMjQyLjM4MjgxMmwtMjcuNTE1NjI1LTMzMmgyOTcuNDEwMTU2em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4K"/>
      </Remove>
    </TodoContainer>
  )
}
const TodoContainer = styled.li`
  background: ${ colors.black };
  box-shadow: ${ shadows.block };
  border-radius: .5em;
  margin-bottom: 1em;
  padding: .5em;
  position: relative;
`
const Check = styled.input`
  position: absolute;
`
const Title = styled.input`
  display: block;
  padding-left: 15px;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  color: #fff;
  font-size: 2em;
  width: 100%;
  &:focus{
    outline: none;
    border-bottom-color: ${ colors.grey };
  }
`
const Task = styled.input`
  display: block;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  color: #fff;
  width: 100%;
  &:focus{
    outline: none;
    border-bottom-color: ${ colors.grey };
  }
`
const Remove = styled.button`
  position: absolute;
  background: ${ colors.red };
  border-radius: 50%;
  width: 2em;
  height: 2em;
  border: none;
  padding: 0;
  line-height: 1em;
  top: -.6em;
  right: -.6em;
  box-shadow: ${ shadows.button };
  img{
    vertical-align: middle;
  }
`