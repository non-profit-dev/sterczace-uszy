import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import TextBanner from "design-system/patterns/textBanner"
import PartnerCard from "design-system/patterns/partnerCard"

import { partnershipsType } from "../../../../lib/types"

import * as Styled from "./AdoptionFamilyPartnerships.styled"

const AdoptionFamilyPartnerships = ({ partnerships }) => (
  <Styled.Wrapper>
    <Container>
      <TextBanner
        heading="Dla Rodzin Adopcyjnych"
        subtitle="Partnerskie Korzyści"
        layout="center"
      >
        <Typography variant="bodyTitle">
          Szczególne oferty kierujemy do osób, które tworzą nowy dom dla naszych
          podopiecznych. Kody zniżkowe otrzymasz po dokonaniu adopcji.
        </Typography>
      </TextBanner>

      <Styled.Cards>
        {partnerships.items
          .filter((item) => item.adoptionFamilyOnly)
          .map((partner) => (
            <PartnerCard
              key={partner.title}
              title={partner.title}
              discount={partner.discount}
              link={partner.url}
              promoCode={partner.discountCode}
              imageSrc={partner.image.url}
              microchipPromoForm={partner.microchipPromoForm}
            >
              {partner.description}
            </PartnerCard>
          ))}
      </Styled.Cards>
    </Container>
  </Styled.Wrapper>
)

AdoptionFamilyPartnerships.propTypes = {
  partnerships: partnershipsType.isRequired,
}

export default AdoptionFamilyPartnerships
