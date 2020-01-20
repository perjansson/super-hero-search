import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  color: red;
`

interface Props {
  error: Error
}

const Error = ({ error }: Props) => (
  <Wrapper role="alert">{error?.message}</Wrapper>
)

export default Error
