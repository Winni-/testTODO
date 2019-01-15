import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './components/App'
import { rootReducer } from './reducers'
import { loadField, saveField } from "./localStorage";

const todos = loadField('todos')
const savedState = {todos}

const store = createStore(rootReducer, savedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
  saveField(store.getState().todos, 'todos')
})

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
)
