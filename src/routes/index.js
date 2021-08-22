import React from "react"
import Layout from "../components/layout"
// Components
import Header from "../components/Header"
// import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
// import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Portfolio from "../components/Portfolio"
import Career from "../components/Career";
const IndexPage = () => (
  <Layout>
    <Header/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Career/>
    <Footer/>
  </Layout>
)

export default IndexPage
