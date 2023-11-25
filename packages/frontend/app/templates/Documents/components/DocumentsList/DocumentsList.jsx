/* eslint-disable react/no-danger */
import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"

import AdoptionSurvey from "frontend/public/documents/AdoptionSurvey.svg"
import TempHomeSurvey from "frontend/public/documents/TempHomeSurvey.svg"

import globalData from "shared/data"

import * as Styled from "./DocumentsList.styled"

const data = [
  {
    heading: `Ankieta przedadopcyjna`,
    steps: [
      `pobierz plik`,
      `wypełnij na komputerze lub wydrukuj`,
      `wypełnione dokumenty prześlij na adres: <a href="mailto:${globalData.contact.mail.text}">
        ${globalData.contact.mail.text}
      </a>`,
      `poczekaj na odpowiedź od nas`,
    ],
    link: `${globalData.surveys.preAdoption}`,
    asset: <AdoptionSurvey />,
  },
  {
    heading: `Ankieta dla domu tymczasowego`,
    steps: [
      `pobierz plik`,
      `wypełnij na komputerze lub wydrukuj`,
      `wypełnione dokumenty prześlij na adres: <a href="mailto:${globalData.contact.mail.text}">
        ${globalData.contact.mail.text}
      </a>`,
      `poczekaj na odpowiedź od nas`,
    ],
    link: `${globalData.surveys.temporaryHome}`,
    asset: <TempHomeSurvey />,
  },
]

const DocumentsTemplate = () =>
  data.map((document) => (
    <Styled.SurveyContainer key={document.heading}>
      <Styled.Image>{document.asset}</Styled.Image>

      <TextBanner
        heading={document.heading}
        tabletLayout="left"
        mobileLayout="left"
        size="small"
        button={
          <Button
            text="Pobierz"
            variant="fill"
            color="primary"
            iconEnd="download"
            size="medium"
            href={document.link}
            target="_blank"
          />
        }
      >
        <Typography variant="bodyTitle">Co musisz zrobić?</Typography>

        <List gap={0}>
          {document.steps.map((item) => (
            <ListItem key={item} iconName="dot" variant="gray">
              <div dangerouslySetInnerHTML={{ __html: item }} />
            </ListItem>
          ))}
        </List>
      </TextBanner>
    </Styled.SurveyContainer>
  ))

export default DocumentsTemplate
