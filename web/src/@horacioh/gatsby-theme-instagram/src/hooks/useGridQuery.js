import {useStaticQuery, graphql} from 'gatsby'

export default function useGridQuery () {
  return useStaticQuery(graphql`
    query {
      allInstaNode(limit: 9) {
        edges {
          node {
            id
            username
            likes
            comments
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
}
