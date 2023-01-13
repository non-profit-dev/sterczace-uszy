import { useTheme } from "@emotion/react"

import TextBanner from "design-system/recipes/textBanner"
import Button from "design-system/components/button"
import IconButton from "design-system/components/iconButton"

import Page from "../Page"

import data from "./data"

import * as Styled from "./HomePage.styled"

const HomePage = () => {
  const theme = useTheme()
  return (
    <Page>
      <Styled.Main>
        <Styled.Container>
          <Styled.TextContainer>
            <TextBanner
              subtitle="Fundacja sterczące uszy"
              heading="Strona w budowie"
              description="Już za chwilę wracamy z nasza nową stroną. Zwierzaki jednak potrzebują pomocy cały czas. Wejdź na stronę ratujemyzwierzaki.pl i wesprzyj naszą fundację ❤"
              size="large"
              layout="center"
              subtitleColor={theme.colors.primary[500]}
              headingColor={theme.colors.neutrals[100]}
              descriptionColor={theme.colors.neutrals[100]}
              button={
                <Button
                  text="Przekaż wsparcie"
                  variant="fill"
                  color="primary"
                  href={data.fundraising}
                  size="large"
                  target="_blank"
                />
              }
            />
            <Styled.IconContainer>
              <IconButton
                name="facebook"
                size="large"
                color={theme.colors.neutrals[100]}
                href={data.socialMedia.facebook}
                ariaLabel="Visit our Facebook profile"
              />
              <IconButton
                name="instagram"
                size="large"
                color={theme.colors.neutrals[100]}
                href={data.socialMedia.instagram}
                ariaLabel="Visit our Instagram profile"
              />
              <IconButton
                name="mail"
                size="large"
                color={theme.colors.neutrals[100]}
                href={`mailto:${data.mail}`}
                ariaLabel="Send message via email"
              />
            </Styled.IconContainer>
          </Styled.TextContainer>

          <Styled.Background />
        </Styled.Container>
      </Styled.Main>
    </Page>
  )
}

export default HomePage
