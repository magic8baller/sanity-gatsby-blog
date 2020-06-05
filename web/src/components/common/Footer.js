import React from 'react'
import SocialLinks from 'lib/socialLinks'
import './footer.css'
const Footer = ({siteTitle}) => (
  <footer className='footer'>
    <div>
      <SocialLinks styleClass='footer-links' />
      <h4>
        copyright&copy;{new Date().getFullYear()}
        <span> {siteTitle} </span> all rights reserved
      </h4>
    </div>
  </footer>
)
export default Footer
