import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router'

import HeroDetailsContainer from '../heroes/details/HeroDetailsContainer'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

type Props = RouteComponentProps<{ id: string }>

const HeroPage = ({ match }: Props) => {
  return (
    <PageWrapper>
      <HeroDetailsContainer id={match.params.id} />
    </PageWrapper>
  )
}

export default HeroPage
