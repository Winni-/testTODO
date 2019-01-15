import React from 'react'
import { Filters } from './Filters'
import { AddTodo } from '../components/AddTodo'
import { VisibleTodoList } from '../containers/VisibleTodoList'
import styled from 'styled-components'

export const App = () => (
  <Container>
    <AddTodo />
    <Filters/>
    <VisibleTodoList />
  </Container>
)

const Container = styled.div`
  max-width: 600px;
  margin: 10vh auto 0;
`

