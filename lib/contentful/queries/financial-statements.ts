import gql from "graphql-tag"

import { fetchGraphQL } from "../graphql-client"
import type { FinancialStatementFields, GraphQLCollection } from "../types"

export const GET_FINANCIAL_STATEMENTS = gql`
  query GetFinancialStatements {
    financialStatementCollection {
      items {
        name
        url
      }
    }
  }
`

export async function getFinancialStatements(preview = false) {
  const response = await fetchGraphQL<{
    financialStatementCollection: GraphQLCollection<FinancialStatementFields>
  }>(GET_FINANCIAL_STATEMENTS, {}, preview)

  return response.financialStatementCollection.items
}
