import { useTheme } from "@emotion/react"

import Button from "design-system/components/button"
import Title from "design-system/components/title"
import Typography from "design-system/components/typography"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const cards = [
  {
    title: "Sprawdź warunki adopcji",
    buttonText: "Dowiedz się więcej",
    buttonHref: "/adopcja",
    illustration: "heartWithDogFace",
  },
  {
    title: "Zostań domem tymczasowym",
    buttonText: "Poznaj zasady",
    buttonHref: "/jak-pomoc",
    illustration: "heartWithDogFace",
  },
  {
    title: "Przekaż dary rzeczowe",
    buttonText: "Podaruj",
    buttonHref: "/adopcja",
    illustration: "heartWithDogFace",
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
            subtitle="Fundacja Sterczące Uszy"
            descriptionColor={theme.colors.neutrals[100]}
            size="large"
            button={
              <Button text="Wesprzyj nas" color="primary" href="/jak-pomoc" />
            }
          >
            Nasi podopieczni czekają na Twoją pomoc. Pełna miska, miejsce do
            spania, opieka lekarza to tylko niektóre z naszych potrzeb. Chcesz
            czynić dobro, przekaż wsparcie finansowe.
          </TextBanner>
        </Styled.Content>
        <Styled.Cards>
          {cards.map(({ title, buttonText, buttonHref, illustration }) => (
            <Styled.Card
              key={title}
              href={buttonHref}
              layout="center"
              illustrationName={illustration}
              hideIllustrationOnMobile
              hideButtonOnMobile
              title={<Title text={title} variant="text" textSize="h4" />}
              mobileTitle={<Typography variant="h5">{title}</Typography>}
              mobileLayout="left"
              button={
                <Button
                  text={buttonText}
                  variant="text"
                  iconEnd="arrowRight"
                  size="small"
                  as="div"
                />
              }
              bgColor={theme.colors.neutrals[100]}
            />
          ))}
        </Styled.Cards>
      </Styled.Container>
    </Styled.Hero>
  )
}

export default Hero
