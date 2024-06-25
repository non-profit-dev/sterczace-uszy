import { useState } from "react"
import { useForm } from "@formspree/react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Input from "design-system/components/input"
import Select from "design-system/components/select"
import Checkbox from "design-system/components/checkbox"

import TextBanner from "design-system/patterns/textBanner"
import Illustration from "design-system/components/illustration/Illustration"
import * as Styled from "./MicrochipsForm.styled"

const MicrochipsForm = () => {
  const [activeForm, setActiveForm] = useState(true)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_PROMO_FORM_ID, {
    data: {
      "g-recaptcha-response": executeRecaptcha,
      subject: "[SAFE ANIMAL] Prośba o kod promocyjny",
    },
  })

  const handleForm = (e) => {
    e.preventDefault()
    setActiveForm(false)
    handleSubmit(e)
  }

  return (
    <Styled.FormWrapper>
      {state.succeeded && !activeForm ? (
        <>
          <Styled.IllustrationWrapper>
            <Illustration name="confirmation" />
          </Styled.IllustrationWrapper>

          <TextBanner
            size="small"
            heading="Generujemy kod promocyjny"
            button={
              <Button
                text="Poproś o więcej"
                onClick={() => setActiveForm(true)}
              />
            }
          >
            <Typography variant="bodySmall">
              Dostaliśmy Twoją prośbę o kod promocyjny, w ciągu kilku dni
              otrzymasz od nas wiadomość z kodem na adres mailowy podany w
              formularzu.
            </Typography>
          </TextBanner>
        </>
      ) : (
        <Styled.Form onSubmit={(e) => handleForm(e)}>
          <Typography variant="bodySmall">
            Otrzymasz od nas kod promocyjny na -10% przy rejestracji na stronie{" "}
            <a
              href="https://www.safe-animal.eu"
              target="_blank"
              rel="noreferrer"
            >
              www.safe-animal.eu
            </a>{" "}
            Możesz poprosić o dowolną ilość kodów promocyjnych.
          </Typography>
          <Styled.InputContainer>
            <Input
              label="Twoje imię"
              placeholder="Twoje imię"
              type="text"
              name="Imię"
              required
            />
            <Input
              label="Twój e-mail"
              placeholder="Twój adres e-mail"
              type="email"
              name="Mail"
              required
            />
          </Styled.InputContainer>
          <Select
            label="Ilość potrzebnych kodów (jednorazowo nie więcej niż 10)"
            name="Ilość potrzebnych kodów"
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            defaultValue="1"
            required
          />
          <Styled.CheckboxContainer>
            <Checkbox
              id="promo-code"
              label={
                <>
                  Wysyłając prośbę o kod promocyjny wyrażasz zgodę na
                  przetwarzanie Twoich danych osobowych w celu obsługi Twojego
                  zapytania. Przeczytaj{" "}
                  <a
                    href="/polityka-prywatnosci"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Politykę Prywatności
                  </a>
                  , aby poznać szczegóły.
                </>
              }
              required
            />
          </Styled.CheckboxContainer>
          <Styled.ButtonContainer>
            <Button
              text={state.submitting ? "Wysyłanie" : "Poproś o kod promocyjny"}
              disabled={state.submitting}
            />
          </Styled.ButtonContainer>
        </Styled.Form>
      )}
    </Styled.FormWrapper>
  )
}

export default MicrochipsForm
