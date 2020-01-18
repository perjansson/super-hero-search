import * as React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`

const NavBar = styled.div`
  width: 100%;
  padding: 16px 0;
  background: ${props => props.theme.colors.navBarBackground};
  color: ${props => props.theme.colors.navBarColor};
`

interface Props {
  children: React.ReactNode
}
const Header = ({ children }: Props) => (
  <NavBar>
    <Title>{children}</Title>
  </NavBar>
)

export default Header
