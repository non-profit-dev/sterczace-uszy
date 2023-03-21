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
        excerpt
        slug
        thumbnail {
          url
        }
      }
    }
  }
`

export const GET_ADOPTED_ANIMALS = gql`
  query GetAdoptedAnimals {
    animalCollection(where: { adopted: true }) {
      total
    }
  }
`
