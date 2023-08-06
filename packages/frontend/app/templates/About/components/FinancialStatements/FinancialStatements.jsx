import { shape, arrayOf, string } from "prop-types"
import React from "react"
import TextBanner from "design-system/patterns/textBanner"
import Typography from "design-system/components/typography"
import Button from "design-system/components/button"

import * as Styled from "./FinancialStatements.styled"

const FinancialStatements = ({ data }) => (
  <Styled.Container>
    <Styled.FinancialDataWrapper>
      <TextBanner
        heading="Dane finansowe fundacji"
        subtitle="Sprawdź"
        mobileLayout="left"
        tabletLayout="left"
      >
        <Styled.Description>
          <Typography variant="bodyTitle">
            Wierzymy, że zaufanie do fundacji jest podstawowym warunkiem
            skutecznego pomagania. Przejrzystość naszej pracy i transparentność
            wobec darczyńców cenimy sobie ponad wszystko.
          </Typography>
        </Styled.Description>
      </TextBanner>
      <Typography variant="h5" as="p">
        Tutaj znajdziesz wszystkie sprawozdania z działalności fundacji:{" "}
      </Typography>
      <Styled.ButtonsContainer>
        {data.map(({ name, url }) => (
          <Button
            variant="text"
            text={name}
            href={url}
            key={name}
            iconStart="download"
            target="_blank"
          />
        ))}
      </Styled.ButtonsContainer>
    </Styled.FinancialDataWrapper>
    <Styled.TextWrapper>
      <Typography variant="h4" as="p">
        Dziękujemy za Wasze wsparcie{" "}
        <Styled.HeartIcon name="heartFilled" size="large" />
      </Typography>
    </Styled.TextWrapper>
    <Styled.ImageWrapper>
      <Styled.ImageHeading variant="h6" as="p">
        Nasze najważniejsze koszty:
      </Styled.ImageHeading>
      <Styled.DesktopImage src="/about/financial-chart-desktop.png" alt="" />
      <Styled.MobileImage src="/about/financial-chart-mobile.png" alt="" />
    </Styled.ImageWrapper>
  </Styled.Container>
)

FinancialStatements.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      url: string,
    })
  ).isRequired,
}

export default FinancialStatements
