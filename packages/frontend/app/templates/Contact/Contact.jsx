import { useForm } from "@formspree/react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import Container from "design-system/components/container/Container"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import Page from "../Page"
import Form from "./components/Form"
import ContactInfo from "./components/ContactInfo"
import Response from "./components/Response"

import * as Styled from "./Contact.styled"

const Contact = () => {
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
      <Container as="main" size="medium">
        <Styled.ContactContainer>
          <ContactInfo />
          {state.succeeded ? (
            <Response />
          ) : (
            <Form handleSubmit={handleSubmit} submitting={state.submitting} />
          )}
        </Styled.ContactContainer>
      </Container>
      <Footer />
    </Page>
  )
}
export default Contact
