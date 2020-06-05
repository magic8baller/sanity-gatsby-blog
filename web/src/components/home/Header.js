/** @jsx jsx */
import React from 'react'
import {jsx} from 'theme-ui'
import Logo from 'components/shared/Logo'
const Header = ({children}) => (
  <header sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <div>
      <Logo /> Yoga with Susan Turis
    </div>
    {children}
  </header>
)

export default Header
