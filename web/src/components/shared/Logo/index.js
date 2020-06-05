import React from 'react'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

export default () => {
  const {LogoImg} = useStaticQuery(graphql`
    query LogoImageQuery {
      LogoImg: file(relativePath: {eq: "logo-trans.png"}) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(LogoImg)
  return (
    <Img fluid={LogoImg.childImageSharp.fluid} />
  )
}
