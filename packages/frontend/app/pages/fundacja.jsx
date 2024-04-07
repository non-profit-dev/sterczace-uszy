import AboutPage from "../templates/About"

import {
  supportingType,
  animalsType,
  adoptedAnimalsType,
  testimonialType,
} from "../lib/types"

import client from "../lib/api"
import {
  GET_ADOPTED_ANIMALS,
  GET_ANIMALS,
  GET_SUPPORTING,
  GET_TESTIMONIALS,
} from "../lib/queries"

const About = ({ animals, supporting, adoptedAnimals, testimonials }) => (
  <AboutPage
    animals={animals}
    supporting={supporting}
    adoptedAnimals={adoptedAnimals}
    testimonials={testimonials}
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

  const { data: testimonials } = await client.query({
    query: GET_TESTIMONIALS,
  })

  return {
    props: {
      animals: animals.animalCollection,
      adoptedAnimals: adoptedAnimals.animalCollection,
      supporting: supporting.supportingCollection,
      testimonials: testimonials.testimonialCollection,
      fallback: true,
    },
  }
}

About.propTypes = {
  animals: animalsType.isRequired,
  supporting: supportingType.isRequired,
  adoptedAnimals: adoptedAnimalsType.isRequired,
  testimonials: testimonialType.isRequired,
}

export default About
