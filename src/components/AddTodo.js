import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo as addTodoAction } from '../actions'

const addTodo = ( {addTodoAction} ) => {
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')
  
  const reset = () => {
    setTitle('')
    setTask('')
  };
  const handleSubmit = e => {
    e.preventDefault()
    if ( !task.trim() ) {
      return
    }
    addTodoAction(title, task)
    reset()
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id='title' value={ title } onChange={ e => setTitle(e.target.value) }/>
        <label htmlFor="task">Task</label>
        <input id='task' value={ task } onChange={ e => setTask(e.target.value) }/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export const AddTodo = connect(null, {addTodoAction})(addTodo)
