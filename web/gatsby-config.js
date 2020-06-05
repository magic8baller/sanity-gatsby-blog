require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})
const path = require('path')

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        lib: path.join(__dirname, 'src/lib'),
        containers: path.join(__dirname, 'src/containers'),
        styles: path.join(__dirname, 'src/styles'),
        templates: path.join(__dirname, 'src/templates'),
        images: path.join(__dirname, 'src/images'),
        hooks: path.join(__dirname, 'src/hooks')
      }
    },
    {
      resolve: '@horacioh/gatsby-theme-instagram',
      options: {
        username: `susanturis`
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    }
  ]
}
