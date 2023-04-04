import { gql } from "@apollo/client"

export const GET_SUPPORTING = gql`
  query GetSupporting {
    supportingCollection {
      total
      items {
        name
        description
        url
        urlText
        logo {
          url
        }
      }
    }
  }
`

export const GET_ANIMALS = gql`
  query GetAnimals {
    animalCollection(where: { adopted: false }) {
      total
      items {
        sys {
          id
        }
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

export const GET_ANIMAL = gql`
  query GetAnimal($slug: String) {
    animalCollection(where: { slug: $slug }) {
      items {
        slug
        name
        gender
        age
        height
        weight
        targetWeight
        location2
        excerpt
        additionalInfo
        behavior
        health
        thumbnail {
          url
        }
        story {
          json
        }
        behaviorStory {
          json
        }
        socialBehavior {
          json
        }
        healthStory {
          json
        }
        needs {
          json
        }
        family {
          json
        }
        important {
          json
        }
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }
`

export const GET_OTHER_ANIMALS = gql`
  query GetOtherAnimals($slug: String) {
    animalCollection(where: { slug_not: $slug }) {
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
