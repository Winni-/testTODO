import React from 'react'

export const Todo = ( {completed, title, task, handleComplete, handleEdit, handleRemove} ) => {
  return (
    <li>
      <input onChange={ handleComplete } type="checkbox" checked={ completed }/>
      <input onChange={ handleEdit } type='text' value={ title }/>
      <input onChange={ handleEdit } type='text' value={ task }/>
      <button onClick={ handleRemove }>Remove</button>
    </li>
  )
}