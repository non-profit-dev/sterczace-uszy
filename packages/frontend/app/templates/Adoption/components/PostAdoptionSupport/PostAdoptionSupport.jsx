import TextBanner from "design-system/patterns/textBanner"
import Typography from "design-system/components/typography"
import Illustration from "design-system/components/illustration/Illustration"
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
    description: `Pomoc behawioralna
    Jeżeli wasz pies ma problemy behawioralne, nie musicie się martwić. Oferujemy wsparcie w postaci konsultacji z doświadczonym behawiorystą oraz współpracujemy z Asią z "Co ten pies?", która świadczy usługi w Poznaniu i okolicach. Nasze adopcyjne zwierzaki otrzymują również zniżki na te usługi. W opisach zwierząt na naszej stronie informujemy, kiedy to my pokrywamy koszty wizyt u behawiorystów.`,
    illustration: `behaviorist`,
  },
  {
    title: "Pomoc behawioralna",
    description: `Wigilia z rodzinami adopcyjnymi
    Co roku tworzymy również okazję na świąteczne spotkanie wigilijne z rodzinami adopcyjnymi. Na tym niezapomnianym wydarzeniu wspólnie dzielimy się radością, historiami i niezwykłymi chwilami, które nasze czworonogi przyniosły do naszych domów.`,
    illustration: "xmas",
  },
]

const PostAdoptionSupport = () => (
  <Styled.Content>
    <Container>
      <Styled.BannerContent>
        <Illustration name="adoptionSupport" />
        <TextBanner heading="Wsparcie po adopcji" subtitle="Co dalej?">
          <Styled.TextContainer>
            <Typography variant="bodyTitle">
              Kiedy dajecie dom zwierzakowi z naszej fundacji i otaczacie go
              miłością, nie zostajecie sami. Oferujemy wsparcie po adopcji w
              różnych formach, abyście czuli się pewnie i komfortowo w nowej
              roli opiekunów.
            </Typography>
            <Styled.TextBottomWrapper variant="bodyTitle">
              Dostępne formy wsparcia mogą się różnić w zależności od
              adoptowanego zwierzaka. Dlatego, przed adopcją, zachęcamy do
              skonsultowania się z nami i zapytania o konkretny zakres wsparcia,
              który oferujemy rodzinom adopcyjnym. Pragniemy pomóc wam stworzyć
              harmonijną więź ze swoim nowym przyjacielem.
            </Styled.TextBottomWrapper>
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
      <Styled.ContactButton
        variant="border"
        text="Skontaktuj się z nami"
        size="large"
        href="/kontakt"
      />
    </Container>
  </Styled.Content>
)

PostAdoptionSupport.propTypes = {}

PostAdoptionSupport.defaultProps = {}

export default PostAdoptionSupport
