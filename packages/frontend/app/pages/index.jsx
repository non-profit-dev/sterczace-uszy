import React from "react"
import Head from "next/head"

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"

import { fetchComingSoon } from "../lib/api"

import Typography from "../../../design-system/components/typography/Typography"
import Button from "../../../design-system/components/button/Button"

const Home = () => {
  const { data, isLoading } = useQuery(["coming-soon"], () => fetchComingSoon())

  return isLoading ? (
    <p>Loading...</p>
  ) : (
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

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.fetchQuery(["coming-soon"], () => fetchComingSoon())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
