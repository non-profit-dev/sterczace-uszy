import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

import AdoptionSurvey from "frontend/public/documents/AdoptionSurvey.svg"
import TempHomeSurvey from "frontend/public/documents/TempHomeSurvey.svg"
import globalData from "shared/data"

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
        wypełnione dokumenty prześlij na adres {globalData.contact.mail.text}
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
            href={globalData.surveys.preAdoption}
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
            href={globalData.surveys.temporaryHome}
          />
        }
      >
        <Info />
      </TextBanner>
    </Styled.SurveyContainer>
  </>
)

export default DocumentsTemplate
