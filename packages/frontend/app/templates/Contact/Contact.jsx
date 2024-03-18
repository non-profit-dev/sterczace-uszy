import { useForm } from "@formspree/react"
import { useTheme } from "@emotion/react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import Container from "design-system/components/container/Container"

import Hero from "design-system/patterns/hero"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import Page from "../Page"
import Form from "./components/Form"
import ContactInfo from "./components/ContactInfo"
import Response from "./components/Response"

import * as Styled from "./Contact.styled"

const Contact = () => {
  const theme = useTheme()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_CONTACT_FORM_ID,
    {
      data: {
        "g-recaptcha-response": executeRecaptcha,
        subject: "Kontakt - nowa wiadomość",
      },
    }
  )

  return (
    <Page title="Kontakt">
      <SupportBanner />
      <Navigation />
      <main>
        <Hero
          heading="Bądźmy w kontakcie!"
          subtitle="Masz pytania? Pisz śmiało!"
          description="Jeśli masz jakiekolwiek pytania nie wahaj się pisać lub wysłać smsa. Odpowiadamy tak szybko jak to możliwe."
          backgroundColor={theme.colors.complementary[100]}
          asset="/contact/Hero.png"
        />
        <Container size="medium">
          <Styled.ContactContainer>
            <ContactInfo />
            {state.succeeded ? (
              <Response />
            ) : (
              <Form handleSubmit={handleSubmit} submitting={state.submitting} />
            )}
          </Styled.ContactContainer>
        </Container>
      </main>

      <Footer />
    </Page>
  )
}
export default Contact
