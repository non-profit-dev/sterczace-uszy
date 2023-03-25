import Count from "design-system/components/count"
import Button from "design-system/components/button"
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
  <Styled.Container as="section">
    <Styled.Wrapper>
      <Styled.Heading variant="h3">Jednorazowa wpłata</Styled.Heading>

      <Typography variant="bodyTitle">
        Wybierz wygodną formę dokonania wpłaty za pośrednictwem strony
        <strong> www.ratujemyzwierzaki.pl</strong>
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
  </Styled.Container>
)

export default OneTimeDonation
