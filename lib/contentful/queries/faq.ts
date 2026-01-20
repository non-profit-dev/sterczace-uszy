import gql from "graphql-tag"

import { fetchGraphQL } from "../graphql-client"
import type { FaqFields, GraphQLCollection } from "../types"

export const GET_FAQS = gql`
  query GetFaqs {
    faqCollection(limit: 50) {
      items {
        question
        category
        answer {
          json
        }
      }
    }
  }
`

export async function getFaqs(preview = false) {
  const response = await fetchGraphQL<{
    faqCollection: GraphQLCollection<FaqFields>
  }>(GET_FAQS, {}, preview)

  return response.faqCollection.items
}
