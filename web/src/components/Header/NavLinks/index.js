import React from 'react'
import {Link} from 'gatsby'
import {Links} from './navLinks.styles'

export default ({desktop}) => {
  return (
    <Links desktop={desktop} >
      <Link to='/' activeClassName='current'>
        Home
      </Link>
      <Link to='/about' activeClassName='current'>
        About
      </Link>
      <Link to='/blog' activeClassName='current'>
        Blog
      </Link>
      <Link to='/schedule' activeClassName='current'>
        Schedule
      </Link>
      <Link to='/contact' activeClassName='current'>
        Contact
      </Link>
    </Links>
  )
}
