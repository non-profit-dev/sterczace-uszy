import Typography from "design-system/components/typography"
import Feature from "design-system/patterns/feature"
import Illustration from "design-system/components/illustration"
import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"

import * as Styled from "./Info.styled"

const list = [
  {
    heading: "Behawiorysty/ki",
    description:
      "Osoby, która na stałe będzie wspierać nas swoją wiedzą i doświadczeniem. Pomoże w socjalizacji i ułatwi powrót naszych podopiecznych do życia społecznego",
    illustration: "training",
  },
  {
    heading: "Groomera/ki",
    description:
      "Osoby o magicznych zdolnościach, która potrafi zmienić każdą żabę w księżniczkę i księcia ;-). Wymagana cierpliwość do zwierząt i chęć niesienia pomocy!",
    illustration: "scissors",
  },
  {
    heading: "Fotografa/ki",
    description:
      "Osoby, która pasjonuje się fotografią, kocha zwierzęta i umie z nimi współpracować. Pragniemy, aby każdy nasz podopieczny mógł pokazać się z jak najlepszej strony.",
    illustration: "camera",
  },
  {
    heading: "Kierowcy",
    description:
      "W związku z ciągłą potrzebą dojazdów do potrzebujących zwierząt, szukamy osoby, która dysponuje czasem i autem, abyśmy mogli działać jeszcze sprawniej i efektywniej.",
    illustration: "car",
  },
]

const descriptions = [
  "Choć w prowadzenie Fundacji wkładamy całe serce, wciąż brakuje nam rąk do pracy. Poszukujemy ludzi o wielkim sercu, którzy chcą poświęcić swój czas i energię, aby poprawić życie bezdomnych zwierząt.",
  "Potrzebujemy wolontariuszy, którzy pomogą odzyskać naszym podopiecznym nadzieję na lepszy dom.",
  "Wolontariat w fundacji to nie tylko okazja do pomocy, ale także do zdobycia nowych doświadczeń i nawiązania pięknych relacji z bezdomnymi psami i kotami.",
  "Jeśli chcesz pomóc zwierzętom, ale nie wiesz jak to zrobić - dołącz do nas! Każde wsparcie jest dla nas cenne.",
]

const Info = () => (
  <Styled.Wrapper>
    <Styled.ContainerSection as="section">
      <Styled.MainBanner>
        <Styled.Img src="/volunteering/volunteering-image.png" alt="" />

        <Styled.ImageWrapper>
          <Illustration name="heartLine" />
        </Styled.ImageWrapper>

        <Styled.TextWrapper>
          <TextBanner
            heading="Zostań wolontariuszem"
            subtitle="Pomagaj"
            tabletLayout="left"
            mobileLayout="left"
          />
          {descriptions.map((description) => (
            <Typography variant="bodyTitle" key={description}>
              {description}
            </Typography>
          ))}
        </Styled.TextWrapper>
      </Styled.MainBanner>

      <Styled.TitleText text="Kogo szukamy?" variant="h3" />

      <Styled.List>
        {list.map(({ heading, description, illustration }) => (
          <li key={heading}>
            <Feature heading={heading} illustration={illustration}>
              {description}
            </Feature>
          </li>
        ))}
      </Styled.List>

      <Styled.Button>
        <Button text="Zgłoś się" size="medium" variant="fill" href="/kontakt" />
      </Styled.Button>
    </Styled.ContainerSection>
  </Styled.Wrapper>
)

export default Info
