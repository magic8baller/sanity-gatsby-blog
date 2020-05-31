import React from 'react'
// import {Global, css} from '@emotion/core'
import Calendar from 'components/home/Schedule'
// import Container from 'components/container/container'
import GraphQLErrorList from 'components/graphql-error-list'
import SEO from 'components/seo'
// import Layout from 'containers/Layout'
import InstaFeed from 'components/home/InstaFeed'
import Layout from 'components/home/Layout'
import useSiteMetadata from 'hooks/use-siteMetadata'

const IndexPage = ({errors}) => {
  const site = useSiteMetadata()
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

      <main>
        <InstaFeed />
        <Calendar />
      </main>
    </Layout>
  )
}

export default IndexPage
