import AdoptionPage from "../templates/Adoption"

import { supportingType, animalsType, adoptedAnimalsType } from "../lib/types"

import client from "../lib/api"
import {
  GET_ADOPTED_ANIMALS,
  GET_ANIMALS,
  GET_SUPPORTING,
} from "../lib/queries"

const Adoption = ({ animals, supporting, adoptedAnimals }) => (
  <AdoptionPage
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

Adoption.propTypes = {
  animals: animalsType.isRequired,
  supporting: supportingType.isRequired,
  adoptedAnimals: adoptedAnimalsType.isRequired,
}

export default Adoption
