/**@jsx jsx */

import Layout from 'components/home/Layout'
import SEO from 'components/seo'
import {jsx} from 'theme-ui'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
    <div
  sx={{
    display: 'grid',
    gridGap: 3,
    gridTemplateColumns: `repeat(auto-fit, minmax(128px, 1fr))`,
    px: 3,
    py: 4
  }}>
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>

  </Layout>
)

export default NotFoundPage
