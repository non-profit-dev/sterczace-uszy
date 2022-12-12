import React from "react"
import { Normalize } from "styled-normalize"

import Head from "next/head"

import Badge from "design-system/components/badge"
import Icon from "design-system/components/icon"

const Home = () => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <title>Fundacja Sterczące Uszy</title>
    </Head>
    <Normalize />
    <h1>Sterczące Uszy</h1>
    <Badge text="Badge" />
    <Icon name="arrowDown" />
  </>
)

export default Home
