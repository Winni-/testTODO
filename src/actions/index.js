import { types } from './types'
import uuid from 'uuid/v4'

export const addTodo = ( title, task ) => ({
  type: types.ADD_TODO,
  payload: {
    id: uuid(),
    title,
    task
  }
})
export const editTodo = ( {id, title, task} ) => ({
  type: types.EDIT_TASK,
  payload: {
    id,
    title,
    task
  }
})
export const removeTodo = ( id ) => ({
  type: types.REMOVE_TODO,
  payload: {
    id
  }
})

export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
})

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  payload: {
    id
  }
})

export const VisibilityFilters = {
  SHOW_ALL: types.SHOW_ALL,
  SHOW_COMPLETED: types.SHOW_COMPLETED,
  SHOW_ACTIVE: types.SHOW_ACTIVE
}
