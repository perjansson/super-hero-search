import * as React from 'react'
import styled from 'styled-components'
import { Hero } from '../types'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  width: 100%;
`

const Name = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.7em;
`

interface SearchResultItemProps {
  hero: Hero
}

const SearchResultItem = ({ hero }: SearchResultItemProps) => (
  <Wrapper>
    <Name>{hero.name}</Name>
  </Wrapper>
)

export default SearchResultItem
