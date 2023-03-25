import { shape, arrayOf, string, number } from "prop-types"

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
