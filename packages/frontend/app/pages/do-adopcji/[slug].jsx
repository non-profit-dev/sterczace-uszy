import AnimalPage from "../../templates/Animal"

import client from "../../lib/api"
import { GET_ANIMALS, GET_ANIMAL, GET_OTHER_ANIMALS } from "../../lib/queries"
import { animalType, animalsType } from "../../lib/types"

const Animal = ({ data, otherAnimals }) => (
  <AnimalPage data={data} otherAnimals={otherAnimals} />
)

export const getStaticProps = async ({ params }) => {
  const { data: animalData } = await client.query({
    query: GET_ANIMAL,
    variables: { slug: params.slug },
  })

  const { data: otherAnimals } = await client.query({
    query: GET_OTHER_ANIMALS,
    variables: { slug: params.slug },
  })

  return {
    props: {
      data: animalData.animalCollection.items[0],
      otherAnimals: otherAnimals.animalCollection,
      fallback: true,
    },
  }
}

export const getStaticPaths = async () => {
  const { data: animals } = await client.query({
    query: GET_ANIMALS,
  })

  return {
    paths: animals.animalCollection.items.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

Animal.propTypes = {
  data: animalType.isRequired,
  otherAnimals: animalsType.isRequired,
}

export default Animal
