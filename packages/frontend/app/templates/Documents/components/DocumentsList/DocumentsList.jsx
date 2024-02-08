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
      `wypełnij ankietę online`,
      `zweryfikuj wysyłkę ankiety`,
      "poczekaj na odpowiedź od nas",
    ],
    link: `${globalData.surveys.preAdoption}`,
    asset: <AdoptionSurvey />,
  },
  {
    heading: `Ankieta dla domu tymczasowego`,
    steps: [
      `wypełnij ankietę online`,
      `zweryfikuj wysyłkę ankiety`,
      "poczekaj na odpowiedź od nas",
    ],
    link: `${globalData.surveys.temporaryHome}`,
    asset: <TempHomeSurvey />,
  },
]

const DocumentsTemplate = () =>
  data.map((document) => (
    <Styled.SurveyContainer key={document.heading}>
      <Styled.Image>{document.asset}</Styled.Image>
      <Styled.Container>
        <TextBanner
          heading={document.heading}
          tabletLayout="left"
          mobileLayout="left"
          size="small"
          button={
            <Button
              variant="text"
              text={document.heading}
              iconEnd="externalLink"
              target="_blank"
              href={document.link}
            />
          }
        >
          <Typography variant="bodySmall">Co musisz zrobić?</Typography>
          <List gap={0}>
            {document.steps.map((item, index) => (
              <ListItem
                key={item}
                iconName="dot"
                variant="gray"
                style={index === 0 ? { paddingTop: "0px" } : {}}
              >
                <div dangerouslySetInnerHTML={{ __html: item }} />
              </ListItem>
            ))}
          </List>
        </TextBanner>
      </Styled.Container>
    </Styled.SurveyContainer>
  ))

export default DocumentsTemplate
