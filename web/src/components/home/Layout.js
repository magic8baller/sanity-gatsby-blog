/** @jsx jsx */
import {Fragment, useState, useRef} from 'react'
import {jsx} from 'theme-ui'
// import Footer from '../footer'
import Header from './Header'
import Menu from 'components/shared/Menu'
import Burger from 'components/shared/Burger'
import CSSReset from 'lib/css-reset.js'
import FocusLock from 'react-focus-lock'
import {useOnClickOutside} from 'hooks/use-onClickOutside'
export default ({children}) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = 'main-menu'

  useOnClickOutside(node, () => setOpen(false))
  return (
    <Fragment>
      <CSSReset />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // set this to `minHeight: '100vh'` for full viewport height
          minHeight: 256
        }}
      >
        <Header>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </Header>
        <main
          sx={{
            width: '100%',
            flex: '1 1 auto'
          }}
        >
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </Fragment>
  )
}
