import Container from "design-system/components/container"
import Button from "design-system/components/button"
import Image from "design-system/components/image"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./AdoptionProcess.styled"

const AdoptionSteps = () => (
  <Styled.Section>
    <Container>
      <Styled.TextBanner>
        <TextBanner
          heading="Proces adopcji"
          tabletLayout="left"
          mobileLayout="left"
        >
          Tylko 7 prostych kroków dzieli Cię, aby zostać szczęśliwym
          właścicielem czworonoga. Postępuj zgodnie z tymi wskazówkami.
        </TextBanner>
      </Styled.TextBanner>

      <Styled.ImageWrapper>
        <picture>
          <source
            srcSet="/adoption-rules/adoption-process-desktop.png"
            media="(min-width: 1000px)"
          />
          <Image src="/adoption-rules/adoption-process-mobile.png" />
        </picture>
      </Styled.ImageWrapper>

      <Button variant="fill" text="Wybierz czworonoga" href="/do-adopcji" />
    </Container>
  </Styled.Section>
)
export default AdoptionSteps
