import React from "react"
import { Normalize } from "styled-normalize"

import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Head from "next/head"

const Home = ({ articles, categories, homepage }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <Layout categories={categories}>
        <Normalize />
        <Seo seo={homepage.attributes.seo} />
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>{homepage.attributes.hero.title}</h1>
            <Articles articles={articles} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
