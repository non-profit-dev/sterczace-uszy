import gql from "graphql-tag"

import { fetchGraphQL } from "../graphql-client"
import type { GraphQLCollection, PartnershipFields } from "../types"

export const GET_PARTNERSHIPS = gql`
  query GetPartnerships {
    partnershipCollection {
      items {
        adoptionFamilyOnly
        discount
        discountCode
        showLogoInPartners
        title
        description
        url
        image {
          url
        }
      }
    }
  }
`

export async function getPartnerships(preview = false) {
  const response = await fetchGraphQL<{
    partnershipCollection: GraphQLCollection<PartnershipFields>
  }>(GET_PARTNERSHIPS, {}, preview)

  return response.partnershipCollection.items
}
