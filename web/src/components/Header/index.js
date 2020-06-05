import React from 'react'
import Navbar from './Nav'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import {Wrapper, Overlay} from './header.styles'
import useStickyHeader from 'hooks/use-stickyHeader'

const Header = () => {
  const [isHomePage, sidebar, toggle] = useStickyHeader()

  return (
    <Wrapper isHomePage={isHomePage}>
      <Overlay sidebar={sidebar} onClick={toggle} />
      <Navbar />
      <Hamburger isHomePage={isHomePage} sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  )
}

export default Header;

