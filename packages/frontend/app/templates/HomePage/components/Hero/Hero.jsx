import { useTheme } from "@emotion/react"

import Button from "design-system/components/button"

import TextBanner from "design-system/patterns/textBanner"
import Card from "design-system/patterns/card"

import globalData from "shared/data"

import * as Styled from "./Hero.styled"

const cards = [
  {
    title: "Sprawdź warunki adopcji",
    buttonText: "Dowiedz się więcej",
    buttonHref: "/zasady-adopcji",
    illustration: "womanAndDog",
  },
  {
    title: "Zostań domem tymczasowym",
    buttonText: "Poznaj zasady",
    buttonHref: "/dom-tymczasowy",
    illustration: "temporaryHome",
  },
  {
    title: "Przekaż 1.5% podatku",
    buttonText: "Dowiedz się więcej",
    buttonHref: "/wplaty#podatek",
    illustration: "percentage",
  },
]

const Hero = () => {
  const theme = useTheme()

  return (
    <Styled.Hero>
      <Styled.Container>
        <Styled.Content>
          <TextBanner
            heading="Pomóż nam pomagać"
            headingColor={theme.colors.neutrals[100]}
            subtitle={`Fundacja ${globalData.organizationName}`}
            descriptionColor={theme.colors.neutrals[100]}
            size="large"
            button={
              <Button text="Wesprzyj nas" size="large" href="/wsparcie" />
            }
          >
            Nasi podopieczni czekają na Twoją pomoc. Pełna miska, miejsce do
            spania, opieka lekarza to tylko niektóre z naszych potrzeb. Chcesz
            czynić dobro, przekaż wsparcie finansowe.
          </TextBanner>
        </Styled.Content>
        <Styled.Cards>
          {cards.map(({ title, buttonText, buttonHref, illustration }) => (
            <Card
              key={title}
              href={buttonHref}
              layout="center"
              illustrationName={illustration}
              title={<Styled.Title text={title} line={false} as="h2" />}
              button={
                <Button
                  text={buttonText}
                  variant="text"
                  iconEnd="arrowRight"
                  size="small"
                  as="div"
                />
              }
            />
          ))}
        </Styled.Cards>
      </Styled.Container>
    </Styled.Hero>
  )
}

export default Hero
