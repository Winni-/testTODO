import { VisibilityFilters } from '../actions'
import { types } from "../actions/types";

export const visibilityFilter = ( state = VisibilityFilters.SHOW_ALL, action ) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}
