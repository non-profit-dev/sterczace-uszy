import AnimalsPage from "../../templates/Animals"

import { animalsType } from "../../lib/types"

import client from "../../lib/api"
import { GET_ANIMALS } from "../../lib/queries"

const Animals = ({ animals }) => <AnimalsPage animals={animals} />

export async function getStaticProps() {
  const { data: animals } = await client.query({
    query: GET_ANIMALS,
  })

  return {
    props: {
      animals: animals.animalCollection,
      fallback: true,
    },
  }
}

Animals.propTypes = {
  animals: animalsType.isRequired,
}

export default Animals
