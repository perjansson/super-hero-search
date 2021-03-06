import React from 'react'
import styled from 'styled-components'

import SearchHeroContainer from '../heroes/search/SearchHeroContainer'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SearchPage = () => {
  return (
    <PageWrapper>
      <SearchHeroContainer />
    </PageWrapper>
  )
}

export default SearchPage
