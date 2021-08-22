import React from "react"
import Layout from "../components/layout"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Test from "../components/Test"
const IndexPage = () => (
  <Layout>
    <Header/>
    <Work/>
    <About/>
    <Skills/>
    <Promotion/>
      <Test/>
    <Footer/>
  </Layout>
)

export default IndexPage
