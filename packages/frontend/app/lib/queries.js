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
          url(transform: { quality: 50, format: JPG, width: 600 })
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
          url(transform: { quality: 50, format: JPG, width: 600 })
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
            url(transform: { quality: 50, format: JPG, width: 600 })
          }
        }
      }
    }
  }
`

export const GET_OTHER_ANIMALS = gql`
  query GetOtherAnimals($slug: String) {
    animalCollection(where: { slug_not: $slug, AND: { adopted: false } }) {
      total
      items {
        name
        gender
        age
        excerpt
        slug
        thumbnail {
          url(transform: { quality: 50, format: JPG, width: 600 })
        }
      }
    }
  }
`
export const GET_ANIMALS_NAME = gql`
  query GetAnimalsName {
    animalCollection(where: { adopted: false }) {
      total
      items {
        name
      }
    }
  }
`
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

export const GET_PARTNERSHIPS = gql`
  query GetPartnerships {
    partnershipCollection {
      items {
        adoptionFamilyOnly
        discount
        discountCode
        title
        description
        url
        image {
          url
        }
        microchipPromoForm
      }
    }
  }
`

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
