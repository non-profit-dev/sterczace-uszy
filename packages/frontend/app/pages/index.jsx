import React from "react"
import Head from "next/head"

import { fetchAPI } from "../lib/api"

import Typography from "../../../design-system/components/typography/Typography"
import Button from "../../../design-system/components/button/Button"

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>{data.seo.metaTitle}</title>
        <meta name="description" content={data.seo.metaDescription} />
      </Head>
      <Typography variant="h1">{data.heading}</Typography>
      <Typography variant="bodyTitle">{data.description}</Typography>

      <Button text={data.link.text} href={data.link.url} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [comingSoonRes] = await Promise.all([
    fetchAPI("/coming-soon", {
      populate: {
        seo: { populate: "*" },
        link: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      data: comingSoonRes.data.attributes,
    },
    revalidate: 1,
  }
}

export default Home
