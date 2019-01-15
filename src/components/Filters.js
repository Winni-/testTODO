import React from 'react'
import { FilterLink } from '../containers/FilterLink'
import { VisibilityFilters } from "../actions";
import styled from 'styled-components'

export const Filters = () => (
  <Container>
    <span>Filter: </span>
    <FilterLink filter={ VisibilityFilters.SHOW_ALL }>
      All
    </FilterLink>
    <FilterLink filter={ VisibilityFilters.SHOW_ACTIVE }>
      Active
    </FilterLink>
    <FilterLink filter={ VisibilityFilters.SHOW_COMPLETED }>
      Completed
    </FilterLink>
  </Container>
)

const Container = styled.div`
  margin: 1em 0 0 0;
`