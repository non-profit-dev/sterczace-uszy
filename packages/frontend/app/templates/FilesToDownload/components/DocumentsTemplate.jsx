import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

import * as Styled from "./DocumentsTemplate.styled"

const DocumentsTemplate = ({ data }) =>
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
        <div>
          <Typography variant="bodyTitle">Co musisz zrobić?</Typography>

          <ul>
            {document?.steps?.map((step) => (
              <Typography variant="bodyTitle" as="li" key={step}>
                {step}
              </Typography>
            ))}
          </ul>
        </div>
      </TextBanner>
    </Styled.SurveyContainer>
  ))

export default DocumentsTemplate
