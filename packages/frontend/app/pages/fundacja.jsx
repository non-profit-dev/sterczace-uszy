import AboutPage from "../templates/About"

import {
  supportingType,
  animalsType,
  adoptedAnimalsType,
  financialStatementsType,
} from "../lib/types"

import client from "../lib/api"
import {
  GET_ADOPTED_ANIMALS,
  GET_ANIMALS,
  GET_SUPPORTING,
  GET_FINANCIAL_STATEMENTS,
} from "../lib/queries"

const About = ({
  animals,
  supporting,
  adoptedAnimals,
  financialStatements,
}) => (
  <AboutPage
    animals={animals}
    supporting={supporting}
    adoptedAnimals={adoptedAnimals}
    financialStatements={financialStatements}
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

  const { data: financialStatements } = await client.query({
    query: GET_FINANCIAL_STATEMENTS,
  })

  return {
    props: {
      animals: animals.animalCollection,
      adoptedAnimals: adoptedAnimals.animalCollection,
      supporting: supporting.supportingCollection,
      financialStatements: financialStatements.financialStatementCollection,
      fallback: true,
    },
  }
}

About.propTypes = {
  animals: animalsType.isRequired,
  supporting: supportingType.isRequired,
  adoptedAnimals: adoptedAnimalsType.isRequired,
  financialStatements: financialStatementsType.isRequired,
}

export default About
