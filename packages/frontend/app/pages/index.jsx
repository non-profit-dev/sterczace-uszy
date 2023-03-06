import { arrayOf, shape, string, number } from "prop-types"

import HomePage from "../templates/HomePage/HomePage"

import client from "../lib/api"
import {
  GET_ADOPTED_ANIMALS,
  GET_ANIMALS,
  GET_SUPPORTING,
} from "../lib/queries"

const Home = ({ animals, supporting, adoptedAnimals }) => (
  <HomePage
    animals={animals}
    supporting={supporting}
    adoptedAnimals={adoptedAnimals}
  />
)

export async function getStaticProps() {
  const { data: animals } = await client.query({
    query: GET_ANIMALS,
  })

  const { data: supporting } = await client.query({
    query: GET_SUPPORTING,
  })

  const { data: adoptedAnimals } = await client.query({
    query: GET_ADOPTED_ANIMALS,
  })

  return {
    props: {
      animals: animals.animalCollection,
      adoptedAnimals: adoptedAnimals.animalCollection,
      supporting: supporting.supportingCollection,
      fallback: true,
    },
  }
}

Home.propTypes = {
  animals: shape({
    items: arrayOf(
      shape({
        name: string,
        gender: string,
        age: string,
        excerpt: string,
      })
    ),
  }).isRequired,
  supporting: shape({
    items: arrayOf(
      shape({
        name: string,
        description: string,
        url: string,
      })
    ),
  }).isRequired,
  adoptedAnimals: shape({
    total: number,
  }).isRequired,
}

export default Home
