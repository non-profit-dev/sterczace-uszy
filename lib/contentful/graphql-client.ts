import type { DocumentNode } from "graphql"
import { print } from "graphql"

import { contentfulConfig } from "./config"

const CONTENTFUL_GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${contentfulConfig.spaceId}/environments/${contentfulConfig.environment}`
const CONTENTFUL_REVALIDATE_SECONDS = 10 * 60

interface GraphQLResponse<T> {
  data: T
  errors?: Array<{
    message: string
    extensions?: {
      contentful?: {
        code: string
        requestId: string
      }
    }
  }>
}

export async function fetchGraphQL<T = any>(
  query: string | DocumentNode,
  variables?: Record<string, any>,
  preview = false
): Promise<T> {
  const accessToken = preview
    ? contentfulConfig.previewAccessToken || contentfulConfig.accessToken
    : contentfulConfig.accessToken

  const queryString = typeof query === "string" ? query : print(query)

  try {
    const response = await fetch(CONTENTFUL_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: queryString,
        variables,
      }),
      next: {
        revalidate: preview ? 0 : CONTENTFUL_REVALIDATE_SECONDS,
      },
    })

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`)
    }

    const json: GraphQLResponse<T> = await response.json()

    if (json.errors) {
      console.error("GraphQL Errors:", json.errors)
      throw new Error(`GraphQL Error: ${json.errors.map((e) => e.message).join(", ")}`)
    }

    return json.data
  } catch (error) {
    console.error("Failed to fetch GraphQL:", error)
    throw error
  }
}

export async function previewGraphQL<T = any>(
  query: string | DocumentNode,
  variables?: Record<string, any>
): Promise<T> {
  return fetchGraphQL<T>(query, variables, true)
}
