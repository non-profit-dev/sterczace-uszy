import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Button from "design-system/components/button"
import TextBanner from "design-system/patterns/textBanner"

import Feature from "design-system/patterns/feature"
import Title from "design-system/components/title"
import { useTheme } from "@emotion/react"
import globalData from "shared/data"
import * as Styled from "./InternationalAdoptionConditions.styled"

const features = [
  {
    title: "Wiek",
    description: `Pies ma ukończone 3 miesiące.`,
  },
  {
    title: "Opłata",
    description: `Opłacisz szczepienie na wściekliznę, paszport i jeśli potrzeba chip.`,
  },
  {
    title: "Kwarantanna",
    description: `Ulokujesz psa w zaufanym miejscu na czas kwarantanny poszczepiennej (21 dni).`,
  },
  {
    title: "Odbiór",
    description: `Odbierzesz psa osobiście w Polsce.`,
  },
]

const data = [
  {
    title: `Adopcja psa młodszego niż 3 miesiące`,
    description: `Adopcja za granicę psa, który jeszcze nie ukończył 3 miesięcy jest możliwa, ale istnieje wtedy konieczność zapewnienia mu miejsca u zaufanej rodziny do osiągnięcia przez niego 3 miesięcy i wykonania formalności lub Umowa o dom tymczasowy z fundacją, wykluczając zwrot pieniędzy za opiekę weterynaryjną i karmę.`,
  },
  {
    title: `Wyjątkowe sytuacje`,
    description: `Istnieje możliwość zatrzymania psa w domu tymczasowym w wyjątkowych sytuacjach i za zgodą fundacji oraz do czasu szczepienia i kwarantanny poszczepiennej. W takiej sytuacji adoptujący pokrywa koszty weterynaryjne, karmę i inne niezbędne rzeczy ustalone z Domem Tymczasowym.`,
  },
  {
    title: `Ankieta i umowa do adopcji za granicę`,
    description: `Adopcja za granicę nie wymaga wypełnienia innej ankiety niż standardowa. W umowie adopcyjnej istnieją dodatkowe punkty dotyczące ulokowania i utrzymania psa w Domu Tymczasowym.`,
    links: [
      {
        title: `Pobierz ankietę`,
        href: globalData.surveys.preAdoption,
      },
      {
        title: `Pobierz umowę adopcyjną za granicę`,
        href: globalData.agreements.adoption,
      },
    ],
  },
  {
    title: `Warunki wyjazdu psa poza Polskę`,
    description: `Warunkiem wyjazdu psa poza Polskę jest podpisanie oraz dotrzymanie wszystkich punktów umowy.
    Jeśli jakiś paragraf umowy nie zostanie dotrzymany, Fundacja ma prawo nie wydać psa i adoptować go innej rodzinie bez obowiązku podpisania zrzeczenia się zwierzęcia oraz bez zwrotu kosztów, które dotychczas poniósł potencjalny Adoptujący.`,
  },
]

const InternationalAdoptionConditions = () => {
  const theme = useTheme()

  return (
    <Styled.SectionWrapper>
      <Container as="section">
        <Styled.Grid>
          <Styled.Header>
            <TextBanner
              heading="Adopcja za granicę"
              tabletLayout="left"
              mobileLayout="left"
            >
              <Typography variant="bodyTitle">
                Adopcja za granicę przebiega podobnie do standardowej adopcji.
                Jedynym dodatkowym elementem jest kwarantanna. Sprawdź jakie są
                4 warunki, aby stała się możliwa.
              </Typography>
            </TextBanner>
          </Styled.Header>
          <Styled.ImageWrapper>
            <Styled.Image src="/adoption/international-adoption.png" alt="" />
          </Styled.ImageWrapper>
          <Styled.Features>
            <Styled.Content>
              {features.map(({ title, description }, i) => (
                <Feature key={title} heading={title} count={i + 1} color="gray">
                  {description}
                </Feature>
              ))}
            </Styled.Content>
          </Styled.Features>
        </Styled.Grid>

        <Styled.MoreInfo>
          {data.map(({ title, description, links }) => (
            <Styled.TextBox key={title}>
              <Title text={title} variant="h3" />
              <Typography variant="bodyTitle" color={theme.colors.gray[600]}>
                {description}
              </Typography>

              <Styled.Links>
                {links?.map((link) => (
                  <Button
                    key={link.title}
                    variant="text"
                    iconStart="download"
                    text={link.title}
                    href={link.href}
                  />
                ))}
              </Styled.Links>
            </Styled.TextBox>
          ))}
        </Styled.MoreInfo>

        <Styled.ButtonWrapper>
          <Button
            variant="border"
            text="Skontaktuj się z nami"
            href="/kontakt"
          />
        </Styled.ButtonWrapper>
      </Container>
    </Styled.SectionWrapper>
  )
}

export default InternationalAdoptionConditions
