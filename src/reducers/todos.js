import {types} from '../actions/types';
export const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          ...action.payload,
          completed: false
        }
      ].sort((task1, task2)=>{
        return -task1.title.localeCompare(task2.title);
      })
    case types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    case types.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.payload.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}
