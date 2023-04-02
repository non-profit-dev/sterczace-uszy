import { shape, arrayOf, string, number } from "prop-types"

export const animalType = shape({
  slug: string,
  name: string,
  gender: string,
  age: number,
  excerpt: string,
  height: number,
  weight: number,
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
      age: number,
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
