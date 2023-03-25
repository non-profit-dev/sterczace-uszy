import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./TemporaryHome.styled"

const TemporaryHome = () => (
  <Container as="section" id="dom-tymczasowy">
    <Styled.Content>
      <TextBanner
        heading="Zostań domem tymczasowym"
        subtitle="Dom tymczasowy"
        size="medium"
      >
        By skutecznie ratować psy i koty nie wystarczy je zabrać z koszmarnych
        warunków. Potrzeba też miejsca, by je ulokować do czasu adopcji, umyć,
        uspokoić i nakarmić. Domy tymczasowe to najczęściej pierwszy kontakt ze
        zwierzakami. To odpowiedzialna rola, bo to właśnie Dom Tymczasowy dba o
        zwierzę, pokazuje mu, że ludzie są fajni... Opisuje zachowania
        zwierzęcia, chodzi do weterynarza, daje szansę zwierzakowi na lepsze
        życie!
      </TextBanner>
    </Styled.Content>
  </Container>
)

export default TemporaryHome
