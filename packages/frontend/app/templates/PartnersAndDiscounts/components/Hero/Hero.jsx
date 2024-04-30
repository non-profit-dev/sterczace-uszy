import { useTheme } from "@emotion/react"

import Button from "design-system/components/button"

import TextBanner from "design-system/patterns/textBanner"

import globalData from "shared/data"

import * as Styled from "./Hero.styled"

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
            button={<Button text="Wesprzyj nas" size="large" href="/wplaty" />}
          >
            Nasi podopieczni czekają na Twoją pomoc. Pełna miska, miejsce do
            spania, opieka lekarza to tylko niektóre z naszych potrzeb. Chcesz
            czynić dobro, przekaż wsparcie finansowe.
          </TextBanner>
        </Styled.Content>
      </Styled.Container>
    </Styled.Hero>
  )
}

export default Hero
