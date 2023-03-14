import { shape, arrayOf, string, number } from "prop-types"

export const animalsType = shape({
  items: arrayOf(
    shape({
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
    })
  ),
})

export const adoptedAnimalsType = shape({
  number,
})
