import React from "react"
import Head from 'next/head'

import GottiumLogo from "../assets/img/logo_white.png"
import { Container } from "../styles/pages/Home"

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <img src={ GottiumLogo } />
        <h1>ReactJS Structure!</h1>
        <p>A ReactJS + Next structure made by Kaique Araújo.</p>
      </main>
    </Container>
  )
}

export default Home
