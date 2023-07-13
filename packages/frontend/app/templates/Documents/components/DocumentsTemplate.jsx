/* eslint-disable react/no-danger */
import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"

import AdoptionSurvey from "frontend/public/documents/AdoptionSurvey.svg"
import TempHomeSurvey from "frontend/public/documents/TempHomeSurvey.svg"
import globalData from "shared/data"

import * as Styled from "./DocumentsTemplate.styled"

const list = [
  "pobierz plik",
  "wypełnij na komputerze lub wydrukuj",
  `wypełnione dokumenty prześlij na adres: 
    <a href="mailto:${globalData.contact.mail.text}">
      ${globalData.contact.mail.text}
    </a>
  `,
  "poczekaj na odpowiedź od nas",
]

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
            target="_blank"
          />
        }
      >
        <Typography variant="bodySmall">Co musisz zrobić?</Typography>

        <List gap={0}>
          {list.map((item) => (
            <ListItem key={item} iconName="dot" variant="gray">
              <div dangerouslySetInnerHTML={{ __html: item }} />
            </ListItem>
          ))}
        </List>
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
            target="_blank"
          />
        }
      >
        <Typography variant="bodySmall">Co musisz zrobić?</Typography>

        <List gap={0}>
          {list.map((item) => (
            <ListItem key={item} iconName="dot" variant="gray">
              <div dangerouslySetInnerHTML={{ __html: item }} />
            </ListItem>
          ))}
        </List>
      </TextBanner>
    </Styled.SurveyContainer>
  </>
)

export default DocumentsTemplate
