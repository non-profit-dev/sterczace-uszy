import Container from "design-system/components/container"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import Hero from "./components/Hero"
import Page from "../Page"

import { financialStatementsType } from "../../lib/types"

import * as Styled from "./FinancialData.styled"
import FinancialStatements from "./components/FinancialStatements"

const FinancialData = ({ financialStatements }) => (
  <Page title="O nas">
    <Navigation />
    <Styled.Main>
      <Hero />
      <Container>
        <FinancialStatements data={financialStatements.items} />
      </Container>
    </Styled.Main>
    <Footer />
  </Page>
)

FinancialData.propTypes = {
  financialStatements: financialStatementsType.isRequired,
}

export default FinancialData
