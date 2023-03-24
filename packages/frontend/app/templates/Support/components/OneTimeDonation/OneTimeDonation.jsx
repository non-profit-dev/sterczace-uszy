import Count from "design-system/components/count"
import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import * as Styled from "./OneTimeDonation.styled"

const data = [
  {
    title: "25zł",
    description: "Zapewnia karmę dla podopiecznego na 1 tydzień",
  },
  {
    title: "50zł",
    description: "Pozwala zakupić szczepionkę przeciwko parowirozie",
  },
  {
    title: "100zł",
    description:
      "Pozwala wykupić sesję z behawiorystą i przyspieszyć możliwą adopcję",
  },
]

const OneTimeDonation = () => (
  <Container as="section">
    <Styled.Wrapper>
      <Typography variant="h3">Jednorazowa wpłata</Typography>
      <Typography variant="bodyTitle">
        Wybierz wygodną formę dokonania wpłaty za pośrednictwem strony
        www.ratujemyzwierzaki.pl
      </Typography>

      <Styled.Options>
        {data.map(({ title, description }) => (
          <div key={title}>
            <Count count={title} />
            <Typography variant="bodySmall">{description}</Typography>
          </div>
        ))}
      </Styled.Options>

      <Button
        variant="fill"
        size="large"
        text="Wpłać"
        href="https://www.ratujemyzwierzaki.pl/sterczaceuszy"
        target="_blank"
      />
    </Styled.Wrapper>
  </Container>
)

export default OneTimeDonation
