import React from 'react'
import styled from 'styled-components'

import { useTypedSelector } from '../../store/reducer'
import HeroDetails from './HeroDetails'

const Name = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.7em;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > ${Name} {
    margin-bottom: 48px;
  }
`

interface Props {
  id: string
}

const HeroDetailsContainer = ({ id }: Props) => {
  const hero = useTypedSelector(state => state.heroes.heroesById[id])

  return (
    <Wrapper>
      <Name>{hero.name}</Name>
      <HeroDetails hero={hero} />
    </Wrapper>
  )
}

export default HeroDetailsContainer
