import {useStaticQuery, graphql} from 'gatsby'
const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          likes
          comments
          caption
          username
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return data.allInstaNode.nodes.map(node => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    comments: node.comments,
    caption: node.caption,
    username: node.username,
    likes: node.likes
  }))
}

export default useInstagram
