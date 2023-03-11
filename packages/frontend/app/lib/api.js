import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_CONTENTFUL_SPACE_ID}/environments/staging?access_token=${process.env.NEXT_CONTENTFUL_ACCESS_TOKEN}`,
  cache: new InMemoryCache(),
})

export default client
