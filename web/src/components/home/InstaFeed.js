import React from 'react'
import Grid from 'src/@horacioh/gatsby-theme-instagram/src/components/Grid'
import styled from '@emotion/styled'

const InstaContainer = styled.div`
padding: 0;
  margin: 5em;
  align-items: center;
  @media (min-width: 48em) {
    padding: 2em;
    margin: 1em 5em;
  }
`;

const InstaFeed = () => {
  return (
    <InstaContainer>
      <Grid />
    </InstaContainer>
  )
}

export default InstaFeed
