/* eslint-disable react/no-danger */
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Illustration from "design-system/components/illustration"
import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./VirtualCertificate.styled"

const VirtualCertificate = () => (
  <Styled.Section id="wirtualna-adopcja">
    <Container as="section">
      <Styled.Wrapper>
        <Styled.Content>
          <TextBanner
            heading="Certyfikat wirtualnego opiekuna"
            subtitle="Zastanawiasz się czy warto?"
            layout="left"
            tabletLayout="left"
            mobileLayout="left"
            size="medium"
          >
            <Typography variant="bodyTitle">
              Każdy, kto zdecyduje się na comiesięczne wpłaty w podziękowaniu od
              wybranego podopiecznego i Fundacji, otrzyma swój indywidualny
              CERTYFIKAT Wirtualnego Opiekuna!
            </Typography>
          </TextBanner>
        </Styled.Content>
        <img
          alt="wirtualny certyfikat"
          src="../virtual-adoption/virtual-certificate.png"
        />
        <Styled.AdditionalNote variant="h3">
          Dziękujemy za każda wirtualną adopcje! Pamiętaj Twoja pomoc ma moc!
        </Styled.AdditionalNote>
      </Styled.Wrapper>
    </Container>
  </Styled.Section>
)

export default VirtualCertificate
