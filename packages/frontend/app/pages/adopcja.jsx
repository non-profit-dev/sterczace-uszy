import AdoptionPage from "../templates/Adoption"

import { animalsType } from "../lib/types"

import client from "../lib/api"
import { GET_ANIMALS_NAME } from "../lib/queries"

const Adoption = ({ animals }) => <AdoptionPage animals={animals} />

export async function getStaticProps() {
  const { data: animals } = await client.query({
    query: GET_ANIMALS_NAME,
  })
  return {
    props: {
      animals: animals.animalCollection,
      fallback: true,
    },
  }
}

Adoption.propTypes = {
  animals: animalsType.isRequired,
}

export default Adoption
