import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import Container from "design-system/components/container"
import * as Styled from "./PageNotFound.styled"

const PageNotFound = () => (
  <Styled.Wrapper>
    <Container>
      <TextBanner
        heading="404"
        subtitle="Ups..coś poszło nie tak"
        button={
          <Button
            text="Strona główna"
            variant="fill"
            color="primary"
            size="medium"
            href="/"
          />
        }
      >
        Ta strona nie istnieje. <br /> Przejdź tutaj, aby nas odnaleźć:
      </TextBanner>
    </Container>
  </Styled.Wrapper>
)

export default PageNotFound
