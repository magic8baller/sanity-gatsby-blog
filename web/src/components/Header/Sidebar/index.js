import React from 'react'
import NavLinks from '../NavLinks'
import {SidebarContainer} from './sidebar.styles'

export default ({sidebar, toggle}) => {
  return (
    <SidebarContainer active={sidebar} onClick={toggle} >
      <NavLinks />
    </SidebarContainer>
  )
}
