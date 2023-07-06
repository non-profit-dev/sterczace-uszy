import Typography from "design-system/components/typography"
import Feature from "design-system/patterns/feature"
import Illustration from "design-system/components/illustration"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import * as Styled from "./Volunteering.styled"

const Volunteering = () => {
  const features = [
    {
      heading: "Behawiorysty/ki",
      description:
        "Osoby, która na stałe będzie wspierać nas swoją wiedzą i doświadczeniem. Pomoże w socjalizacji i ułatwi powrót naszych podopiecznych do życia społecznego",
      illustration: "behaviorist",
    },
    {
      heading: "Groomera/ki",
      description:
        "Osoby o magicznych zdolnościach, która potrafi zmienić każdą żabę w księżniczkę i księcia ;-). Wymagana cierpliwość do zwierząt i chęć niesienia pomocy!",
      illustration: "groomer",
    },
    {
      heading: "Fotografa/ki",
      description:
        "Osoby, która pasjonuje się fotografią, kocha zwierzęta i umie z nimi współpracować. Pragniemy, aby każdy nasz podopieczny mógł pokazać się z jak najlepszej strony.",
      illustration: "photograph",
    },
    {
      heading: "Kierowcy",
      description:
        "W związku z ciągłą potrzebą dojazdów do potrzebujących zwierząt, szukamy osoby, która dysponuje czasem i autem, abyśmy mogli działać jeszcze sprawniej i efektywniej.",
      illustration: "driver",
    },
  ]

  return (
    <Styled.Wrapper>
      <Styled.ContainerSection as="section">
        <Styled.Banner
          heading="Zostań wolontariuszem"
          subtitle="WOLONTARIAT"
          size="medium"
          tabletLayout="right"
          mobileLayout="right"
        />

        <Styled.TextWrapper>
          <Typography variant="bodyTitle">
            Choć w prowadzenie Fundacji wkładamy całe serce, wciąż brakuje nam
            rąk do pracy. Poszukujemy ludzi o wielkim sercu, którzy chcą
            poświęcić swój czas i energię, aby poprawić życie bezdomnych
            zwierząt. Potrzebujemy wolontariuszy, którzy pomogą odzyskać naszym
            podopiecznym nadzieję na lepszy dom. Wolontariat w fundacji to nie
            tylko okazja do pomocy, ale także do zdobycia nowych doświadczeń i
            nawiązania pięknych relacji z bezdomnymi psami i kotami. Jeśli
            chcesz pomóc zwierzętom, ale nie wiesz jak to zrobić - dołącz do
            nas! Każde wsparcie jest dla nas cenne.
          </Typography>
        </Styled.TextWrapper>
        <Styled.Img
          alt="dog with heart"
          src="../support/volunteering-image.png"
        />
        <Styled.FeatureWrapper>
          <Styled.Title>
            <Title text="Kogo szukamy?" variant="h3" />
          </Styled.Title>

          {features.map(({ heading, description, illustration }) => (
            <Feature
              key={heading}
              heading={heading}
              illustration={illustration}
            >
              {description}
            </Feature>
          ))}
        </Styled.FeatureWrapper>
        <Styled.ImageWrapper>
          <Illustration name="heartLine" />
        </Styled.ImageWrapper>
        <Styled.Button>
          <Button
            text="Zgłoś się"
            size="medium"
            variant="fill"
            href="/kontakt"
          />
        </Styled.Button>
      </Styled.ContainerSection>
    </Styled.Wrapper>
  )
}

export default Volunteering
