import { shape, arrayOf, string, number } from "prop-types"

export const animalType = shape({
  slug: string,
  name: string,
  gender: string,
  age: string,
  excerpt: string,
  height: number,
  weight: string,
  // the "location" field is temporarily disabled as it would require google maps to be loaded
  location2: string,
  targetWeight: number,
  additionalInfo: arrayOf(string),
  health: arrayOf(string),
  behavior: arrayOf(string),
})

export const animalsType = shape({
  items: arrayOf(
    shape({
      slug: string,
      name: string,
      gender: string,
      age: string,
      excerpt: string,
    })
  ),
})

export const supportingType = shape({
  items: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
      urlText: string,
    })
  ),
})

export const adoptedAnimalsType = shape({
  number,
})
