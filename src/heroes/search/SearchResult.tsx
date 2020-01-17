import * as React from 'react'
import styled from 'styled-components'

import { Hero } from '../../types'
import SearchResultItem from './SearchResultItem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`

interface SearchResultProps {
  results: Hero[]
}

const SearchResult = ({ results }: SearchResultProps) => {
  return (
    <Wrapper>
      {results.map(hero => (
        <SearchResultItem key={hero.id} hero={hero} />
      ))}
    </Wrapper>
  )
}

export default SearchResult
