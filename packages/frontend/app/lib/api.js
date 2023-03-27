import { ApolloClient, InMemoryCache } from "@apollo/client"

const SPACE = process.env.NEXT_CONTENTFUL_SPACE_ID
const ENV = process.env.NEXT_CONTENTFUL_ENV || "staging"
const TOKEN = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENV}?access_token=${TOKEN}`,
  cache: new InMemoryCache(),
})

export default client
