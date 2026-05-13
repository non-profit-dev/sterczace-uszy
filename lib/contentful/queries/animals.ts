import gql from "graphql-tag"

import { fetchGraphQL } from "../graphql-client"
import type { AnimalFields, GraphQLCollection } from "../types"

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
        location
        dateOfBirth
        excerpt
        slug
        behavior
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

export const GET_ADOPTED_ANIMALS_GALLERY = gql`
  query GetAdoptedAnimalsGallery {
    animalCollection(where: { adopted: true }, order: sys_publishedAt_DESC) {
      total
      items {
        name
        thumbnail {
          url(transform: { quality: 60, format: JPG, width: 300 })
        }
      }
    }
  }
`

export const GET_ALL_ANIMALS_COUNT = gql`
  query GetAllAnimalsCount {
    animalCollection {
      total
    }
  }
`

export const GET_ANIMAL = gql`
  query GetAnimal($slug: String) {
    animalCollection(where: { slug: $slug }, limit: 1) {
      items {
        sys {
          id
        }
        slug
        ownerPet
        name
        type
        gender
        dateOfBirth
        weight
        location
        temporaryHome
        adopted
        excerpt
        activityLevel
        health
        behavior
        additionalInfo
        thumbnail {
          url(transform: { quality: 50, format: JPG, width: 600 })
        }
        description {
          json
        }
        idealFamily {
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
        sys {
          id
        }
        name
        gender
        dateOfBirth
        excerpt
        slug
        behavior
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

export async function getAnimals(preview = false) {
  const response = await fetchGraphQL<{
    animalCollection: GraphQLCollection<AnimalFields>
  }>(GET_ANIMALS, {}, preview)

  return response.animalCollection.items
}

export async function getAdoptedAnimals(preview = false) {
  const response = await fetchGraphQL<{
    animalCollection: GraphQLCollection<Pick<AnimalFields, "name" | "thumbnail">>
  }>(GET_ADOPTED_ANIMALS_GALLERY, {}, preview)

  return response.animalCollection.items
}

export async function getAdoptedAnimalsCount(preview = false) {
  const response = await fetchGraphQL<{
    animalCollection: { total: number }
  }>(GET_ADOPTED_ANIMALS, {}, preview)

  return response.animalCollection.total
}

export async function getAnimal(slug: string, preview = false) {
  const response = await fetchGraphQL<{
    animalCollection: GraphQLCollection<AnimalFields>
  }>(GET_ANIMAL, { slug }, preview)

  return response.animalCollection.items[0] || null
}

export async function getOtherAnimals(slug: string, preview = false) {
  const response = await fetchGraphQL<{
    animalCollection: GraphQLCollection<AnimalFields>
  }>(GET_OTHER_ANIMALS, { slug }, preview)

  return response.animalCollection.items
}

export async function getAnimalsNames(preview = false) {
  const response = await fetchGraphQL<{
    animalCollection: GraphQLCollection<Pick<AnimalFields, "name">>
  }>(GET_ANIMALS_NAME, {}, preview)

  return response.animalCollection.items
}

export async function getAllAnimalsCount(preview = false) {
  const response = await fetchGraphQL<{
    animalCollection: { total: number }
  }>(GET_ALL_ANIMALS_COUNT, {}, preview)

  return response.animalCollection.total
}
