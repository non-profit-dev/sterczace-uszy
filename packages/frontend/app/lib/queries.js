import { gql } from "@apollo/client"

export const GET_SUPPORTING = gql`
  query GetSupporting {
    supportingCollection {
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
    animalCollection(limit: 20) {
      items {
        name
        gender
        age
      }
    }
  }
`
