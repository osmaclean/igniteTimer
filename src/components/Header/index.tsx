import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src="/icon.png" alt="" />
      <nav>
        <NavLink to={'/'} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
