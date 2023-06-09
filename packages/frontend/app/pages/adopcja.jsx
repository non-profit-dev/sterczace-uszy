import AdoptionPage from "../templates/Adoption"
import { animalsType } from "../lib/types"

import client from "../lib/api"
import { GET_ANIMALS_NAME, GET_ANIMALS } from "../lib/queries"

const Adoption = ({ animals, animalsData }) => (
  <AdoptionPage animals={animals} animalsData={animalsData} />
)

export async function getStaticProps() {
  const { data: animals } = await client.query({
    query: GET_ANIMALS_NAME,
  })

  const { data: animalsData } = await client.query({
    query: GET_ANIMALS,
  })

  return {
    props: {
      animals: animals.animalCollection,
      animalsData: animalsData.animalCollection,
      fallback: true,
    },
  }
}

Adoption.propTypes = {
  animals: animalsType.isRequired,
  animalsData: animalsType.isRequired,
}

export default Adoption
