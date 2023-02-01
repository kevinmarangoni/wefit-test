import React from 'react'
import Header from '/src/components/common/header/header'
import Body from '/src/components/pages/home/body'
import Layout from '/src/components/common/layout/Layout'

const Home = () => {

  return (
    <Layout>
      <Header />
      <Body />
    </Layout>
  )
}

export default Home