import { arrayOf, shape, string } from "prop-types"

import HomePage from "../views/HomePage/HomePage"

import client from "../lib/api"
import { GET_ANIMALS, GET_SUPPORTING } from "../lib/queries"

const Home = ({ animals, supporting }) => (
  <HomePage animals={animals} supporting={supporting} />
)

export async function getStaticProps() {
  const { data: animals } = await client.query({
    query: GET_ANIMALS,
  })

  const { data: supporting } = await client.query({
    query: GET_SUPPORTING,
  })

  return {
    props: {
      animals: animals.animalCollection,
      supporting: supporting.supportingCollection,
      fallback: true,
    },
  }
}

Home.propTypes = {
  animals: arrayOf(
    shape({
      name: string,
      gender: string,
      age: string,
    })
  ).isRequired,
  supporting: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
    })
  ).isRequired,
}

export default Home
