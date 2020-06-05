import React, {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
// import 'styles/layout.css'
// import styles from './layout.module.css'
import CSSReset from 'styles/css-reset'

const Layout = ({children, siteTitle}) => {
  const [isOpen, setOpen] = useState(false)
  const toggleSidebar = () => {
    setOpen(!isOpen)
  }
  return (
    <>
      <Navbar siteTitle={siteTitle} toggleSidebar={toggleSidebar} />
      {isOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <CSSReset />
      <main>{children}</main>
      <Footer siteTitle={siteTitle} />
    </>
  )
}
export default Layout
