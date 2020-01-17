import * as React from 'react'
import styled from 'styled-components'
import { Hero } from '../types'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Name = styled.div``

const FullName = styled.div`
  color: ${props => props.theme.colors.quinary};
  font-size: 0.7em;
`

interface SearchResultItemProps {
  hero: Hero
}

const SearchResultItem = ({ hero }: SearchResultItemProps) => (
  <Wrapper>
    <Name>{hero.name}</Name>
    <FullName>{hero.biography['full-name']}</FullName>
  </Wrapper>
)

export default SearchResultItem
