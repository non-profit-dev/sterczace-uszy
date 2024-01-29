import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import * as Styled from "./PageNotFound.styled"

const PageNotFound = () => (
  <Styled.BackgroundWrapper>
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
      Ta strona nie istnieje. Przejdź tutaj, aby nas odnaleźć:
    </TextBanner>
  </Styled.BackgroundWrapper>
)

export default PageNotFound
