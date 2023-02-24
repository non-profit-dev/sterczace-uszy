import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import * as Styled from "./DocumentsTemplate.styled"
import Survey from "../../../public/documents/Survey.svg"

const Info = () => (
  <>
    <Typography variant="bodySmall">Co musisz zrobić?</Typography>
<ul>
    <Typography variant="bodySmall" as="li">
      pobierz plik
    </Typography>
    <Typography variant="bodySmall" as="li">
      wypełnij na komputerze lub wydrukuj
    </Typography>
    <Typography variant="bodySmall" as="li">
      wypełnione dokumenty prześlij na adres fundacjasterczaceuszy@gmail.com
    </Typography>
    <Typography variant="bodySmall" as="li">
      poczekaj na odpowiedź od nas
    </Typography>
</ul>
  </>
)

const DocumentsTemplate = () => (
  <>
    <Styled.SurveyContainer>
      <Styled.Image>
        <Survey />
      </Styled.Image>
      <TextBanner
        heading="Ankieta przedadopcyjna"
        size="tiny"
        button={
          <Button
            text="Pobierz"
            variant="fill"
            color="primary"
            iconEnd="download"
            size="medium"
            href="https://docs.google.com/document/d/1hKhjrIHAuosckCYc-DP4DIuMxG4GhsPI/edit?fbclid=IwAR3nJ1rn9BzM8NZg--T1SET96Xxg0WVZ40IC98ZHfRDWW9kSstgzWYlaDQg"
          />
        }
      >
        <Info />
      </TextBanner>
    </Styled.SurveyContainer>
    <Styled.SurveyContainer>
      <Styled.Image>
        <Survey />
      </Styled.Image>
      <TextBanner
        heading="Ankieta dla domu tymczasowego"
        size="tiny"
        button={
          <Button
            text="Pobierz"
            variant="fill"
            color="primary"
            iconEnd="download"
            size="medium"
            href="https://docs.google.com/document/d/1u_tnZ--5rNME2s9Vn9YZstm7dRAcLQyH/edit?fbclid=IwAR01QrME3E_U1_knHoPeYkgWhJiB7AL4Q-dWylvjkXbnTJDdW0_PrTw7guw"
          />
        }
      >
        <Info />
      </TextBanner>
    </Styled.SurveyContainer>
  </>
)

export default DocumentsTemplate
