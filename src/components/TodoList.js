import React from 'react'
import { Todo } from './Todo'
import styled from 'styled-components'

export const TodoList = ( {todos, toggleTodo, handleEdit, handleRemove} ) => (
  <List>
    { todos.map(todo =>
      <Todo
        key={ todo.id }
        { ...todo }
        handleEdit={ handleEdit(todo.id) }
        handleRemove={ () => handleRemove(todo.id) }
        handleComplete={ () => toggleTodo(todo.id) }
      />
    ) }
  </List>
)
const List = styled.ul`
  background: transparent;
  padding: 0;
  margin: .5em 0;
  list-style: none;
`