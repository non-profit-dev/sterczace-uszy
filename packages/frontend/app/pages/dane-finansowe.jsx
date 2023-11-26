import FinancialData from "../templates/FinancialData"

import { financialStatementsType } from "../lib/types"

import client from "../lib/api"
import { GET_FINANCIAL_STATEMENTS } from "../lib/queries"

const About = ({ financialStatements }) => (
  <FinancialData financialStatements={financialStatements} />
)
export async function getStaticProps() {
  const { data: financialStatements } = await client.query({
    query: GET_FINANCIAL_STATEMENTS,
  })

  return {
    props: {
      financialStatements: financialStatements.financialStatementCollection,
      fallback: true,
    },
  }
}

About.propTypes = {
  financialStatements: financialStatementsType.isRequired,
}

export default About
