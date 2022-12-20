import TextBanner from "design-system/recipes/textBanner"
import Button from "design-system/components/button"
import { useTheme } from "@emotion/react"
import * as Styled from "./HomePage.styled"
import IconButton from "design-system/components/iconButton"

const HomePage = () => {
  const theme = useTheme()
  return (
    <Styled.Background>
      <Styled.HomePageContainer>
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
              href="https://www.ratujemyzwierzaki.pl/sterczaceuszy?fbclid=IwAR1Gjv_H7e-lPqWbLzfcAiJYfUl-gcJR6IClupvBL5N8g6y0d9KfFlzXGVE"
              size="large"
            />
          }
        />

        <Styled.IconContainer>
          <IconButton
            name="facebook"
            size="large"
            color={theme.colors.neutrals[100]}
            href="https://www.facebook.com/sterczaceuszy"
          />
          <IconButton
            name="instagram"
            size="large"
            color={theme.colors.neutrals[100]}
            href="https://www.instagram.com/sterczaceuszy"
          />
          <IconButton
            name="mail"
            size="large"
            color={theme.colors.neutrals[100]}
            href="mailto:fundacjasterczaceuszy@gmail.com"
          />
        </Styled.IconContainer>
      </Styled.HomePageContainer>
    </Styled.Background>
  )
}

export default HomePage
