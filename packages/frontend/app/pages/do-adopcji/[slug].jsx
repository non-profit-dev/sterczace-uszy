import AnimalPage from "../../templates/Animal"

import client from "../../lib/api"
import { GET_ANIMALS, GET_ANIMAL } from "../../lib/queries"
import { animalType } from "../../lib/types"

const Animal = ({ data }) => <AnimalPage data={data} />

export const getStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_ANIMAL,
    variables: { slug: params.slug },
  })

  return {
    props: {
      data: data.animalCollection.items[0],
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
}

export default Animal
