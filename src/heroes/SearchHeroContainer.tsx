import * as React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-lodash-debounce'
import styled from 'styled-components'

import { useTypedSelector } from '../store/reducer'
import { findSuperHero } from './reducer'
import Error from '../components/Error'
import SearchInput from './SearchInput'
import SearchResult from './SearchResult'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: 48px;
  }
`

const SearchHeroContainer = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 1000)

  const { state, data, error } = useTypedSelector(
    state => state.heroes.findRequest
  )

  const handleOnChange = (query: string) => {
    setQuery(query)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    const noInitialSearch = !(state === 'initial' && query === '')
    if (noInitialSearch) {
      dispatch(findSuperHero(query))
    }
  }, [debouncedQuery])

  return (
    <Wrapper>
      <SearchInput
        value={query}
        onChange={handleOnChange}
        placeholder="type to search..."
      />
      {state === 'error' && error && <Error error={error} />}
      {state === 'success' && data && <SearchResult result={data} />}
    </Wrapper>
  )
}

export default SearchHeroContainer
