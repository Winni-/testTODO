import React from 'react'
import { Todo } from './Todo'

export const TodoList = ( {todos, toggleTodo, handleEdit, handleRemove} ) => (
  <ul>
    { todos.map(todo =>
      <Todo
        key={ todo.id }
        { ...todo }
        handleEdit={ ()=> handleEdit(todo.id)}
        handleRemove={ ()=> handleRemove(todo.id)}
        handleComplete={ () => toggleTodo(todo.id) }
      />
    ) }
  </ul>
)