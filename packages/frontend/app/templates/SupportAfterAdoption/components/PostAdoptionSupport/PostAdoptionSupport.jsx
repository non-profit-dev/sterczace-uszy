import TextBanner from "design-system/patterns/textBanner"
import Typography from "design-system/components/typography"
import Feature from "design-system/patterns/feature"
import Container from "design-system/components/container"

import * as Styled from "./PostAdoptionSupport.styled"

const features = [
  {
    title: "Porady i wskazówki",
    description: `Udzielamy porad i wskazówek dotyczących opieki nad nowym czworonogiem. Oferujemy naszą wiedzę i doświadczenie w zakresie karmienia, treningu, pielęgnacji oraz zachowania. Jeśli potrzebujecie bardziej specjalistycznych informacji, podzielimy się również kontaktami do zaufanych specjalistów, którzy mogą pomóc w waszych indywidualnych potrzebach.`,
    illustration: `tips`,
  },
  {
    title: "Pomoc behawioralna",
    description: `Jeżeli wasz pies ma problemy behawioralne, nie musicie się martwić. Oferujemy wsparcie w postaci konsultacji z doświadczonym behawiorystą oraz współpracujemy z Asią z "Co ten pies?", która świadczy usługi w Poznaniu i okolicach. Nasze adopcyjne zwierzaki otrzymują również zniżki na te usługi. W opisach zwierząt na naszej stronie informujemy, kiedy to my pokrywamy koszty wizyt u behawiorystów.`,
    illustration: `training`,
  },
  {
    title: "Wigilia z rodzinami adopcyjnymi",
    description: `Co roku tworzymy również okazję na świąteczne spotkanie wigilijne z rodzinami adopcyjnymi. Na tym niezapomnianym wydarzeniu wspólnie dzielimy się radością, historiami i niezwykłymi chwilami, które nasze czworonogi przyniosły do naszych domów.`,
    illustration: "xmas",
  },
]

const PostAdoptionSupport = () => (
  <Styled.Content>
    <Container>
      <Styled.BannerContent>
        <Styled.SupportIllustration name="adoptionSupport" />
        <TextBanner
          heading="Formy wsparcia po adopcji"
          subtitle="Co dalej?"
          tabletLayout="left"
          mobileLayout="left"
        >
          <Styled.TextContainer>
            <Typography variant="bodyTitle">
              Dostępne formy wsparcia mogą się różnić w zależności od
              adoptowanego zwierzaka. Dlatego, przed adopcją, zachęcamy do
              skonsultowania się z nami i zapytania o konkretny zakres wsparcia,
              który oferujemy rodzinom adopcyjnym. Pragniemy pomóc wam stworzyć
              harmonijną więź ze swoim nowym przyjacielem.
            </Typography>
          </Styled.TextContainer>
        </TextBanner>
      </Styled.BannerContent>

      <Styled.Features>
        {features.map(({ title, description, illustration }) => (
          <Feature key={title} heading={title} illustration={illustration}>
            {description}
          </Feature>
        ))}
      </Styled.Features>
    </Container>
  </Styled.Content>
)

export default PostAdoptionSupport
