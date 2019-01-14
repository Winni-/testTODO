import React from 'react'
import { connect } from 'react-redux'
import { addTodo as addTodoAction } from '../actions'

const addTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodoAction(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export const AddTodo = connect()(addTodo)
