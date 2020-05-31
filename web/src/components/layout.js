import React from 'react'
import Header from './blogHeader/header'
import Footer from './footer'
import 'styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <Footer siteTitle={siteTitle} />
  </>
)

export default Layout
