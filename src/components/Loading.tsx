import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    transform: scale(.85);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const Fade = styled.div`
  color: ${props => props?.theme?.colors?.tertiary};
  animation: ${fadeIn} 0.5s linear;
`

const Loading = () => <Fade>Loading</Fade>

export default Loading
