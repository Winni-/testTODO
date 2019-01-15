import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo as addTodoAction } from '../actions'
import styled from 'styled-components'
import { colors } from "../style/colors";
import { shadows } from "../style/shadows";

const addTodo = ( {addTodoAction} ) => {
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')
  
  const reset = () => {
    setTitle('')
    setTask('')
  };
  const handleSubmit = e => {
    e.preventDefault()
    //can not work without task text
    if ( !task.trim() ) {
      return
    }
    addTodoAction(title, task)
    reset() //clear form
  }
  
  return (
    <Form onSubmit={ handleSubmit }>
      <Label htmlFor="title">Title</Label>
      <Input id='title' value={ title } onChange={ e => setTitle(e.target.value) }/>
      <Label htmlFor="task">Task</Label>
      <Input id='task' value={ task } onChange={ e => setTask(e.target.value) }/>
      <AddButton type="submit">
        Add Todo
      </AddButton>
    </Form>
  )
}
const Form = styled.form`
  background: ${ colors.purple };
  box-shadow: ${ shadows.block };
  padding: 2em;
  border-radius: .5em .5em 0 0;
`
const Label = styled.label`
  display: block;
  margin-bottom: .3em;
`
const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${ colors.grey };
  color: #fff;
  margin-bottom: 1em;
`
const AddButton = styled.button`
  width: 100%;
  border-radius:  20px;
  background: ${ colors.red };
  border: none;
  color: #fff;
  padding: .5em;
  box-shadow: ${shadows.button};
`
export const AddTodo = connect(null, {addTodoAction})(addTodo)
