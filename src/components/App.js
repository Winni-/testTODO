import React from 'react'
import { Footer } from './Footer'
import { AddTodo } from '../components/AddTodo'
import { VisibleTodoList } from '../containers/VisibleTodoList'

export const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

