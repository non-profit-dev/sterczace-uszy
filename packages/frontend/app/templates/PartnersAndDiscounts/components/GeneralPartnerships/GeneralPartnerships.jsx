import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import TextBanner from "design-system/patterns/textBanner"
import PartnerCard from "design-system/patterns/partnerCard"

import MicrochipsForm from "../MicrochipsForm/MicrochipsForm"

import { partnershipsType } from "../../../../lib/types"

import * as Styled from "./GeneralPartnerships.styled"

const GeneralPartnerships = ({ partnerships }) => (
  <Styled.Wrapper>
    <Container>
      <TextBanner
        heading="Dla wszystkich"
        subtitle="Partnerskie Korzyści"
        layout="center"
      >
        <Typography variant="bodyTitle">
          Zapraszamy do skorzystania z kodów zniżkowych i korzystnych ofert.
        </Typography>
      </TextBanner>

      <Styled.Cards>
        {partnerships.items
          .filter((item) => !item.adoptionFamilyOnly)
          .map((partner) => (
            <PartnerCard
              key={partner.title}
              title={partner.title}
              discount={partner.discount}
              link={partner.url}
              promoCode={partner.discountCode}
              imageSrc={partner.image.url}
              microchipPromoForm={partner.microchipPromoForm}
              microchipModal={<MicrochipsForm />}
            >
              {partner.description}
            </PartnerCard>
          ))}
      </Styled.Cards>
    </Container>
  </Styled.Wrapper>
)

GeneralPartnerships.propTypes = {
  partnerships: partnershipsType.isRequired,
}

export default GeneralPartnerships
