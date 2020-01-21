import React from 'react'
import styled from 'styled-components'

import { Hero } from '../../types'

const Image = styled.img`
  margin-bottom: 40px;
`

const DetailTupleWrapper = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.7em;
`

interface DetailTupleProps {
  label: string
  value: string
}

const DetailTuple = ({ label, value }: DetailTupleProps) => (
  <DetailTupleWrapper>
    {label},{value}
  </DetailTupleWrapper>
)

interface Props {
  hero: Hero
}

const HeroDetails = ({ hero }: Props) => {
  return (
    <>
      <Image src={hero.image.url} />
      <DetailTuple label="id" value={hero.id} />
      <DetailTuple label="gender" value={hero.appearance.gender} />
    </>
  )
}

export default HeroDetails
