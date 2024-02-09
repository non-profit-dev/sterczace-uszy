import Container from "design-system/components/container"

import Hero from "design-system/patterns/hero"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import Page from "../Page"

import { financialStatementsType } from "../../lib/types"

import * as Styled from "./FinancialData.styled"
import FinancialStatements from "./components/FinancialStatements"

const FinancialData = ({ financialStatements }) => (
  <Page title="Dane finansowe">
    <Navigation />
    <Styled.Main>
      <Hero
        heading="Dane finansowe"
        subtitle="Nasza Fundacja"
        description="Trzymamy rękę na pulsie i starannie notujemy nasze wydatki, które
    publikujemy w sprawozdaniach finansowych."
        backgroundImage="/financial-data/financial-data-background.png"
        backgroundMobile="/financial-data/financial-data-background-mobile.png"
      />

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
