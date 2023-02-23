import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import * as Styled from "./DocumentsTemplate.styled"
import Survey from "../../../public/documents/Survey.svg"

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
            href="https://docs.google.com/document/d/1EOcSb6OUD42tV_wHufjGwXJ7TigWDXOv/edit?usp=sharing&ouid=101513882861880625680&rtpof=true&sd=true"
          />
        }
      >
        <p>Co musisz zrobić?</p>
        <ul>
          <li> pobierz plik </li>
          <li>wypełnij na komputerze lub wydrukuj</li>
          <li>
            wypełnione dokumenty prześlij na adres
            fundacjasterczaceuszy@gmail.com
          </li>
          <li>poczekaj na odpowiedź od nas</li>
        </ul>
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
            href="https://docs.google.com/document/d/1bDmI9rASydzVdJyhk14z2AhFZB0nesSH/edit?usp=sharing&ouid=101513882861880625680&rtpof=true&sd=true"
          />
        }
      >
        <p>Co musisz zrobić?</p>
        <ul>
          <li> pobierz plik </li>
          <li>wypełnij na komputerze lub wydrukuj</li>
          <li>
            wypełnione dokumenty prześlij na adres
            fundacjasterczaceuszy@gmail.com
          </li>
          <li>poczekaj na odpowiedź od nas</li>
        </ul>
      </TextBanner>
    </Styled.SurveyContainer>
  </>
)

export default DocumentsTemplate
