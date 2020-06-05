import {tailwind} from '@theme-ui/presets'
import merge from 'deepmerge'
import {breakpoints} from './breakpoints'
import {mediaQueries} from './media-queries'
// import {palette} from './tokens'

// export const colors = {
//   white: '#fff',
//   black: '#0A0A0A',
//   accent: '#DBEDF3',
//   danger: '#C53030',
//   mute: 'hsla(0, 0%, 13%, 0.2)',
//   iceberg: '#DBEDF3',
//   paragraphColor: '#0A0A0A',
//   lightGray: '#F2F2F2',
//   shadowGreen: 'hsla(172, 23%, 69%, 0.2)',
//   grey: '#d2d2d2',
//   primary: '#FFC001',
//   text: '#0A0A0A',
//   darkBlue: '#2B4162',
//   modes: {
//     dark: {
//       background: '#0A0A0A',
//       mute: 'hsla(0, 0%, 87%, 0.2)',
//       paragraphColor: '#f4f4f4',
//       lightGray: '#2b2626',
//       grey: '#2b2626',
//       primary: '#FFC001'
//     }
//   }
// }

export const constants = {
  headerHeight: '90px',
  footerHeight: '450px'
}

const baseTheme = merge(tailwind, {

  useColorSchemeMediaQuery: true,
  colors: {
    text: '#0D0C1D',
    background: '#EFFFFA',
    modes: {
      dark: {
        text: '#EFFFFA',
        background: '#0D0C1D'
      }
    }
  },

  lineHeights: {
    body: 1.625
  },
  fontWeights: {
    heading: 'bold'
  },
  sizes: {
    container: 450
  },
  links: {
    nav: {
      px: 2,
      py: 1,
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }

  },
  breakpoints,
  constants
})

export default baseTheme
