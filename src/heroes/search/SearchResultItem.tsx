import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Hero } from '../../types'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  width: 100%;
`

const Name = styled.div`
  font-size: 0.7em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.tertiary};
  &:hover ${Name} {
    color: ${props => props.theme.colors.quaternary};
  }
`

interface SearchResultItemProps {
  hero: Hero
}

const SearchResultItem = ({ hero }: SearchResultItemProps) => (
  <Wrapper>
    <StyledLink to={`/heroes/${hero.id}`}>
      <Name>{hero.name}</Name>
    </StyledLink>
  </Wrapper>
)

export default SearchResultItem
