import React from 'react'
import {FaTimes} from 'react-icons/fa'
import NavLinks from 'lib/navLinks'
import SocialLinks from 'lib/socialLinks'
import './sidebar.css'
const Sidebar = ({toggleSidebar}) => (
  <aside className='sidebar show-sidebar'>
    <button className='close-btn' onClick={toggleSidebar}>
      <FaTimes />
    </button>
    <div className='side-container'>
      <NavLinks styleClass='sidebar-links' />
      <SocialLinks styleClass='sidebar-icons' />
    </div>
  </aside>
)

export default Sidebar
