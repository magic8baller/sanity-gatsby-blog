import React from 'react'
import {jsx} from 'theme-ui'
export default ({children}) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: 256
      }}
    >
      <header
        sx={{
          width: '100%'
        }}
      >
        Yoga with Susan Turis
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto'
        }}
      >
        {children}
      </main>
      <footer
        sx={{
          width: '100%'
        }}
      >
        &copy; {new Date().getFullYear()}, Susan Turis
      </footer>
    </div>
  )
}
