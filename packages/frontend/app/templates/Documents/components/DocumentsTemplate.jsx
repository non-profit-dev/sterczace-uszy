import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

import AdoptionSurvey from "frontend/public/documents/AdoptionSurvey.svg"
import TempHomeSurvey from "frontend/public/documents/TempHomeSurvey.svg"

import * as Styled from "./DocumentsTemplate.styled"

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
        <AdoptionSurvey />
      </Styled.Image>
      <TextBanner
        heading="Ankieta przedadopcyjna"
        size="small"
        tabletLayout="left"
        mobileLayout="left"
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
        <TempHomeSurvey />
      </Styled.Image>
      <TextBanner
        heading="Ankieta dla domu tymczasowego"
        size="small"
        tabletLayout="left"
        mobileLayout="left"
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
