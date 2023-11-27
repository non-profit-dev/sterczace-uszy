import FinancialDataPage from "../templates/FinancialData"

import { financialStatementsType } from "../lib/types"

import client from "../lib/api"
import { GET_FINANCIAL_STATEMENTS } from "../lib/queries"

const FinancialData = ({ financialStatements }) => (
  <FinancialDataPage financialStatements={financialStatements} />
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

FinancialData.propTypes = {
  financialStatements: financialStatementsType.isRequired,
}

export default FinancialData
