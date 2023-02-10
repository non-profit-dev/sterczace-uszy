import { gql } from "@apollo/client"

export const GET_SUPPORTING = gql`
  query GetSupporting {
    supportingCollection {
      total
      items {
        name
        description
        url
      }
    }
  }
`

export const GET_ANIMALS = gql`
  query GetAnimals {
    animalCollection(where: { adopted: false }) {
      total
      items {
        name
        gender
        age
        weight
        excerpt
        thumbnail {
          url
        }
        description {
          json
        }
      }
    }
  }
`

export const GET_ADOPTED_ANIMALS = gql`
  query GetAnimals {
    animalCollection(where: { adopted: true }) {
      items {
        name
        gender
        age
      }
    }
  }
`
