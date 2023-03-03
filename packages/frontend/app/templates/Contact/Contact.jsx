import { useForm } from "@formspree/react"

import Container from "design-system/components/container/Container"

import Page from "../Page"
import Form from "./components/Form"
import ContactInfo from "./components/ContactInfo"
import Response from "./components/Response"

import * as Styled from "./Contact.styled"

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID, {
    data: {
      subject: "Kontakt - nowa wiadomość",
    },
  })

  return (
    <Page title="Kontakt">
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
    </Page>
  )
}
export default Contact
