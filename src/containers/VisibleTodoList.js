import { connect } from 'react-redux'
import { editTodo, removeTodo, toggleTodo, VisibilityFilters } from '../actions'
import { TodoList as todoList } from '../components/TodoList'

const getVisibleTodos = ( todos, filter ) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  handleEdit: id => props => dispatch(editTodo({id, ...props})),
  handleRemove: id => dispatch(removeTodo(id))
})

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList)
