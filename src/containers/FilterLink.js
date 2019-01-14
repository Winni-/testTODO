import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { Link as link } from '../components/Link'

const mapStateToProps = ( state, ownProps ) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(link)
