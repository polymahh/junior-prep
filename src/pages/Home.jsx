import React from 'react'
import Layout from '../component/Layout'
import Footer from '../component/footer'
import Hero from '../component/home/Hero'
import Languages from '../component/home/Languages'

const Home = () => {
  return (
    <Layout>
        <Hero />
        <Languages />
        <Footer />
    </Layout>
  )
}

export default Home
