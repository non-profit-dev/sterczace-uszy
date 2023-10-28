import Typography from "design-system/components/typography"
import Feature from "design-system/patterns/feature"

import Container from "design-system/components/container"
import * as Styled from "./BasicInfo.styled"

const values = [
  {
    heading: "Jak wygląda taka wizyta?",
    description:
      "Wizytator/ka sprawdza warunki dla zwierzęcia jakie panują w miejscu, gdzie zostanie zabrane zwierzę. ",
    icon: "transparency",
  },
  {
    heading: "Gdzie się odbywa?",
    description:
      "Wizyta odbywa się w mieszkaniu lub domu potencjalnej rodziny, niezależnie od kraju zamieszkania.",
    icon: "location",
  },
  {
    heading: "Jak się przygotować?",
    description:
      "Nie musisz robić porządków! Zadbaj jedynie, aby, w miarę możliwości, byli obecni wszyscy domownicy.",
    icon: "responsibility",
  },
  {
    heading: "Ważne informacje",
    description:
      "Na wizycie możemy pojawić się z psem. Wizytatorem/ką może być każda osoba upoważniona przez fundację.",
    icon: "trust",
  },
]

const BasicInfo = () => (
  <Styled.Section>
    <Container>
      <Styled.Banner
        heading="Na czym polega wizyta przedadopcyjna?"
        tabletLayout="left"
        mobileLayout="left"
      >
        <Typography variant="bodyTitle">
          Zawsze najpierw kontaktujemy się z Tobą, aby ustalić termin wizyty.
          Jej głównym celem jest: poznanie się lepiej, sprawdzenie
          bezpieczeństwa miejsca, gdzie będzie przebywało zwierzę oraz rozmowa
          na temat żywienia i opieki nad nowym podopiecznym ze wszystkimi
          członkami rodziny.
        </Typography>
        <Typography variant="bodyTitle">
          To również czas na <strong>Twoje pytania!</strong> Jeśli chcesz o coś
          zapytać to właściwy moment. Chętnie wszystko dokładnie wyjaśnimy.
        </Typography>
      </Styled.Banner>
      <Styled.ListItems gap={40}>
        {values.map(({ heading, description, icon }) => (
          <Feature key={heading} heading={heading} icon={icon}>
            {description}
          </Feature>
        ))}
      </Styled.ListItems>
    </Container>
  </Styled.Section>
)

export default BasicInfo
