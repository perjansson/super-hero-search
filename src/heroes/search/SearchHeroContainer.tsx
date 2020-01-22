import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import styled from 'styled-components'

import { useTypedSelector } from '../../store/reducer'
import { findSuperHero } from '../reducer'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import SearchInput, { SearchInputHandles } from './SearchInput'
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
  const { state, query, data, error } = useTypedSelector(
    state => state.heroes.findRequest
  )

  const [inputQuery, setInputQuery] = useState(query)

  const dispatch = useDispatch()
  const debouncedFindSuperHero = useRef(
    debounce((query: string) => dispatch(findSuperHero(query)), 1000)
  )

  const handleOnChange = (query: string) => {
    setInputQuery(query)
    debouncedFindSuperHero.current(query)
  }

  const searchInputRef = useRef<SearchInputHandles>(null)

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [])

  return (
    <Wrapper>
      <SearchInput
        ref={searchInputRef}
        value={inputQuery}
        onChange={handleOnChange}
        placeholder="type to search..."
      />
      {state === 'loading' && <Loading />}
      {state === 'error' && error && inputQuery && <Error error={error} />}
      {state === 'success' && data && <SearchResult results={data.results} />}
    </Wrapper>
  )
}

export default SearchHeroContainer
