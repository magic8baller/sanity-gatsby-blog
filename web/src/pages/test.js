import React from 'react'
import Layout from 'components/common/Layout'
import SEO from 'components/seo'
import Calendar from 'components/home/Schedule'
export default () => {

  return (
    <Layout title='Yoga with Susan Turis'>
      <SEO title='Home' />
      <Calendar/>
    </Layout>
  )
}