import gql from "graphql-tag"

import { fetchGraphQL } from "../graphql-client"
import type { GlobalFields } from "../types"

export const GET_GLOBAL = gql`
  query GetGlobal {
    globalCollection(limit: 1) {
      items {
        pageTitle
        email
        facebook
        instagram
        accountNumber
        nip
        krs
        address
        city
        preAdoptionSurveyLink
        temporaryHomeSurveyLink
        adoptionAgreement
        temporaryHomeAgreement
        fundraisingLink
      }
    }
  }
`

export async function getGlobalData(preview = false) {
  const response = await fetchGraphQL<{
    globalCollection: {
      items: GlobalFields[]
    }
  }>(GET_GLOBAL, {}, preview)

  return response.globalCollection.items[0] || null
}
