import HomePage from "../templates/HomePage"

import {
  supportingType,
  animalsType,
  adoptedAnimalsType,
} from "../templates/HomePage/types"

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
  animals: animalsType.isRequired,
  supporting: supportingType.isRequired,
  adoptedAnimals: adoptedAnimalsType.isRequired,
}

export default Home
