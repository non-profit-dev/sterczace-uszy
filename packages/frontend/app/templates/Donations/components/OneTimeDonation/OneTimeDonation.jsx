import Count from "design-system/components/count"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import globalData from "shared/data"

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
      <Styled.Heading variant="h3" as="h2">
        Jednorazowa wpłata
      </Styled.Heading>

      <Typography variant="bodyTitle">
        Wybierz wygodną formę dokonania wpłaty za pośrednictwem strony
        <a
          href="https://www.ratujemyzwierzaki.pl/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          {globalData.fundraising.text}
        </a>
      </Typography>

      <Styled.Options>
        {data.map(({ title, description }) => (
          <Styled.Option key={title}>
            <Count count={title} as="h3" size="xsmall" />
            <Typography variant="bodySmall">{description}</Typography>
          </Styled.Option>
        ))}
      </Styled.Options>

      <Button
        variant="fill"
        size="large"
        text="Wpłać"
        href={globalData.fundraising.link}
        target="_blank"
      />
    </Styled.Wrapper>
  </Styled.Container>
)

export default OneTimeDonation
