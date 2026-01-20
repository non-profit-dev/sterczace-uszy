import gql from "graphql-tag"

import { fetchGraphQL } from "../graphql-client"
import type { GraphQLCollection, TestimonialFields } from "../types"

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    testimonialCollection(limit: 10) {
      items {
        author
        authorDescription
        description
        title
      }
    }
  }
`

export async function getTestimonials(preview = false) {
  const response = await fetchGraphQL<{
    testimonialCollection: GraphQLCollection<TestimonialFields>
  }>(GET_TESTIMONIALS, {}, preview)

  return response.testimonialCollection.items
}
