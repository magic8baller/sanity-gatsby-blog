import React from 'react'
import NavHeader from './NavHeader'
import NavLinks from 'lib/navLinks'
import styled from '@emotion/styled'
import './nav.css'
const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: white;
`
const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`
const Navbar = ({toggleSidebar}) => (
  <NavWrapper>
    <NavCenter>
      <NavHeader toggleSidebar={toggleSidebar} />
      <NavLinks styleClass='nav-links' />
    </NavCenter>
  </NavWrapper>
)

export default Navbar
