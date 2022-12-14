import { StyledNav, Logo } from './Navigation.styled'
import Burger from './Burger'
import { useContext } from 'react'

import { ThemeContext } from '../../App'

function Navigation() {
  const { darkTheme } = useContext(ThemeContext)
  const logo = darkTheme ? 'img/logo.png' : 'img/logo_modal.png'
  return (
    <StyledNav>
      <Logo src={logo} />
      <Burger />
    </StyledNav>
  )
}

export default Navigation
