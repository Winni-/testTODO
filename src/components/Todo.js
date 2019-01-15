import React from 'react'
import styled from 'styled-components'
import { colors } from "../style/colors";
import { shadows } from "../style/shadows";

export const Todo = ( {completed, title, task, handleComplete, handleEdit, handleRemove} ) => {
  return (
    <TodoContainer completed={completed}>
      <Check onChange={ handleComplete } type="checkbox" checked={ completed }/>
      <Title onChange={ e=>handleEdit({title: e.target.value, task}) } type='text' value={ title }/>
      <Task onChange={ e=>handleEdit({title,task: e.target.value}) } type='text' value={ task }/>
      <Remove onClick={ handleRemove }>
        <img
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9Ii0zMSAwIDUxMiA1MTIiIHdpZHRoPSIxNnB4Ij48cGF0aCBkPSJtMTUwIDQyMWM4LjI4NTE1NiAwIDE1LTYuNzE0ODQ0IDE1LTE1di0xODBjMC04LjI4NTE1Ni02LjcxNDg0NC0xNS0xNS0xNXMtMTUgNi43MTQ4NDQtMTUgMTV2MTgwYzAgOC4yODUxNTYgNi43MTQ4NDQgMTUgMTUgMTV6bTAgMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im0yMjUgNDIxYzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTV2LTE4MGMwLTguMjg1MTU2LTYuNzE0ODQ0LTE1LTE1LTE1cy0xNSA2LjcxNDg0NC0xNSAxNXYxODBjMCA4LjI4NTE1NiA2LjcxNDg0NCAxNSAxNSAxNXptMCAwIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0ibTMwMCA0MjFjOC4yODUxNTYgMCAxNS02LjcxNDg0NCAxNS0xNXYtMTgwYzAtOC4yODUxNTYtNi43MTQ4NDQtMTUtMTUtMTVzLTE1IDYuNzE0ODQ0LTE1IDE1djE4MGMwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtNDM1IDEyMGgtMjAuNzMwNDY5bC0yNS44NTU0NjktNTEuNzA3MDMxYy0yLjUzOTA2Mi01LjA4MjAzMS03LjczMDQ2OC04LjI5Mjk2OS0xMy40MTQwNjItOC4yOTI5NjloLTc1di00NWMwLTguMjg1MTU2LTYuNzE0ODQ0LTE1LTE1LTE1aC0xMjBjLTguMjg1MTU2IDAtMTUgNi43MTQ4NDQtMTUgMTV2NDVoLTc1Yy01LjY4MzU5NCAwLTEwLjg3NSAzLjIxMDkzOC0xMy40MTc5NjkgOC4yOTI5NjlsLTI1Ljg1MTU2MiA1MS43MDcwMzFoLTIwLjczMDQ2OWMtOC4yODUxNTYgMC0xNSA2LjcxNDg0NC0xNSAxNXM2LjcxNDg0NCAxNSAxNSAxNWgzMS4xOTE0MDZsMjguODU5Mzc1IDM0OC4yMzgyODFjLjY0NDUzMSA3Ljc3NzM0NCA3LjE0NDUzMSAxMy43NjE3MTkgMTQuOTQ5MjE5IDEzLjc2MTcxOWgyNzBjNy44MDQ2ODggMCAxNC4zMDQ2ODgtNS45ODQzNzUgMTQuOTQ5MjE5LTEzLjc2MTcxOWwyOC44NTkzNzUtMzQ4LjIzODI4MWgxLjEwMTU2MmMuMDM1MTU2IDAgLjA2NjQwNi4wMDM5MDYuMTAxNTYzLjAwMzkwNi4wMTk1MzEgMCAuMDM5MDYyLS4wMDM5MDYuMDU4NTkzLS4wMDM5MDZoMjkuOTI5Njg4YzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTVzLTYuNzE0ODQ0LTE1LTE1LTE1em0tMjU1LTkwaDkwdjMwaC05MHptLTk1LjczMDQ2OSA2MGgyODEuNDYwOTM4bDE1IDMwaC0zMTEuNDYwOTM4em0yNjEuOTIxODc1IDM5MmgtMjQyLjM4MjgxMmwtMjcuNTE1NjI1LTMzMmgyOTcuNDEwMTU2em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4K" alt='remove'/>
      </Remove>
    </TodoContainer>
  )
}
const TodoContainer = styled.li`
  background: ${ props => props.completed ?
    `radial-gradient(100px 200% at right , ${colors.purple} 0%, ${colors.purple} 46%,${colors.black} 54%,${colors.black} 100%);`
    : colors.black };
  box-shadow: ${ shadows.block };
  border-radius: .5em;
  margin-bottom: 1em;
  padding: .5em;
  position: relative;
`
const Check = styled.input`
  position: absolute;
  bottom: 1em;
  left: .5em;
  border: 0;
  padding: 0;
  position: absolute;
  &::after{
    content: '';
    display: inline-block;
    width: 28px;
    height: 28px;
    background: ${props => props.checked && 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ1LjcwMSA0NS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NS43MDEgNDUuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMC42ODcsMzguMzMyYy0yLjA3MiwyLjA3Mi01LjQzNCwyLjA3Mi03LjUwNSwwTDEuNTU0LDI2LjcwNGMtMi4wNzItMi4wNzEtMi4wNzItNS40MzMsMC03LjUwNCAgICBjMi4wNzEtMi4wNzIsNS40MzMtMi4wNzIsNy41MDUsMGw2LjkyOCw2LjkyN2MwLjUyMywwLjUyMiwxLjM3MiwwLjUyMiwxLjg5NiwwTDM2LjY0Miw3LjM2OGMyLjA3MS0yLjA3Miw1LjQzMy0yLjA3Miw3LjUwNSwwICAgIGMwLjk5NSwwLjk5NSwxLjU1NCwyLjM0NSwxLjU1NCwzLjc1MmMwLDEuNDA3LTAuNTU5LDIuNzU3LTEuNTU0LDMuNzUyTDIwLjY4NywzOC4zMzJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)'} center center no-repeat ${colors.purple};
    border-radius: 50%;
    border-width: ${props=>props.checked ? '3px': 0};
    border-style: solid;
    border-color: rgba(156,155,220, .5);
    transition: all 150ms;
    position:absolute;
    top:-8px;
    left: -2px;
  }
  
`
const Title = styled.input`
  display: block;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  color: #fff;
  font-size: 2em;
  width: 100%;
  margin-bottom: .5em;
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
  width: 95%;
  margin-left: 5%;
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