import * as React from 'react'
import styled from 'styled-components'

import SearchHeroContainer from '../heroes/search/SearchHeroContainer'

const PageWrapper = styled.div`
  margin-top: 48px;
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
