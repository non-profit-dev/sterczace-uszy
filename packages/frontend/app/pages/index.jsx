import React from "react"
import { Normalize } from "styled-normalize"

import { fetchAPI } from "frontend/lib/api"
import Head from "next/head"

import Badge from "design-system/components/badge"

const Home = ({ homepage }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>{homepage.attributes.seo.metaTitle}</title>
        <meta
          name="description"
          content={homepage.attributes.seo.metaDescription}
        />
      </Head>
      <Normalize />
      <h1>{homepage.attributes.hero.title}</h1>
      <Badge text="Badge" />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
