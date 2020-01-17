import * as React from 'react'
import { Hero } from '../types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
interface SearchResultItemProps {
  hero: Hero
}

const SearchResultItem = ({ hero }: SearchResultItemProps) => (
  <div>{hero.name}</div>
)

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
