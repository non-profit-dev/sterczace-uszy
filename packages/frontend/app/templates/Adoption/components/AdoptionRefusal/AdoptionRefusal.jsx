import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import TextBanner from "design-system/patterns/textBanner"
import Feature from "design-system/patterns/feature"

import ListItem from "design-system/components/listItem"
import List from "design-system/components/list"
import * as Styled from "./AdoptionRefusal.styled"

const features = [
  {
    title: "Czas",
    description: `Są pupile, które potrzebują długich spacerów i zabaw lub takie, które nie są nauczone zostawać same w domu. Jeśli nie możesz poświęcić im odpowiedniej ilości czasu możesz spotkać się z odmową.`,
    icon: `decisionClock`,
  },
  {
    title: "Osobowość",
    description: `To jak zwierzę było traktowane w przeszłości wpływa na jego postawę wobec wszystkich domowników. Bywa, że wymaga to nauki i określonego profilu osobowości, aby móc poradzić sobie przy pracy nad zmianą tych zachowań.`,
    icon: `love`,
  },
  {
    title: "Warunki mieszkaniowe",
    description: `Twoje warunki mieszkaniowe takie jak brak ogrodzenia lub wysokie schody, a także ograniczenia wynikające z wynajmu mogą mieć ogromne znaczenie przy rozpatrywaniu adopcji.`,
    icon: "decisionHome",
  },
]

const other = [
  `młody, energiczny pies potrzebuje aktywnego domu`,
  `nie każdy pies nadaje się dla osoby, która w przeszłości nie miała psa`,
  `nie każdy pies akceptuje dzieci`,
  `niewłaściwe podejście żywieniowe i behawioralne`,
  `nie każdy pies akceptuje inne zwierzęta`,
]

const AdoptionRefusal = () => (
  <Styled.SectionWrapper>
    <Container as="section">
      <Styled.Content>
        <Styled.Header>
          <TextBanner
            heading="Odmowa adopcji"
            tabletLayout="left"
            mobileLayout="left"
          >
            <Typography variant="bodyTitle">
              Kiedy starasz się o adopcję konkretnego zwierzęcia musisz
              pamiętać, że ma ono swój charakter i predyspozycje. Bardzo często
              wymaga indywidualnej opieki, na którą składają się:
            </Typography>
          </TextBanner>
        </Styled.Header>

        <Styled.Features>
          {features.map(({ title, description, icon }) => (
            <Feature key="title" heading={title} icon={icon} color="gray">
              {description}
            </Feature>
          ))}
        </Styled.Features>

        <Styled.OtherReasons>
          <Typography variant="h5" as="p">
            Inne przykłady, które najczęściej mogą wpłynąć na odmowę:
          </Typography>

          <List>
            {other.map((item) => (
              <ListItem key={item} variant="gray" iconName="alert">
                {item}
              </ListItem>
            ))}
          </List>
        </Styled.OtherReasons>

        <Styled.MoreInfo>
          <Typography variant="bodyTitle">
            Pamiętaj, aby zawsze przed podjęciem decyzji o adopcji konkretnego
            psa przeczytać uważnie jego opis na naszej stronie, aby dowiedzieć
            się jakie ma potrzeby, temperament oraz jakie jest jego zachowanie.
            To sprawi, że łatwiej będzie Ci ocenić czy możesz mu to zapewnić.
            się!
          </Typography>

          <Typography variant="bodyTitle">
            Bardzo często negatywna odpowiedz w sprawie konkretnego psa nie
            znaczy, że nie możesz adoptować nowego przyjaciela w ogóle.
          </Typography>

          <Typography variant="bodyTitle">
            Czasem wybór jest niezwykle trudny. Musimy jednak kierować się
            przede wszystkim bezpieczeństwem oraz dobrem zwierząt.
          </Typography>

          <Typography variant="bodyTitle">
            Jeśli uważasz, że spełniasz warunki i jesteś super rodziną - spróbuj
            jeszcze raz! <br />
            <strong>Nie poddawaj się!</strong>
          </Typography>
        </Styled.MoreInfo>
      </Styled.Content>
    </Container>
  </Styled.SectionWrapper>
)

export default AdoptionRefusal
