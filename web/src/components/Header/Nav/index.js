import React from 'react'
import {Link} from 'gatsby'
import Logo from 'components/shared/Logo'

import NavLinks from '../NavLinks'
import {Container, Wrapper, BrandLogo, Brand} from './navbar.styles'

export default () => {
  return (
    <Wrapper as={Container}>
      <Brand as={Link} to='/'>
        <BrandLogo>
          <Logo />
        </BrandLogo>

        Yoga with Susan Turis
      </Brand>
      <NavLinks desktop />
    </Wrapper>
  )
}
