import gql from "graphql-tag"

import { fetchGraphQL } from "../graphql-client"
import type { GraphQLCollection, VolunteerNeedFields } from "../types"

export const GET_VOLUNTEER_NEEDS = gql`
  query GetVolunteerNeeds {
    volunteerNeedCollection(where: { active: true }) {
      total
      items {
        name
        description
        active
      }
    }
  }
`

export async function getVolunteerNeeds(preview = false) {
  const response = await fetchGraphQL<{
    volunteerNeedCollection: GraphQLCollection<VolunteerNeedFields>
  }>(GET_VOLUNTEER_NEEDS, {}, preview)

  return response.volunteerNeedCollection.items
}
