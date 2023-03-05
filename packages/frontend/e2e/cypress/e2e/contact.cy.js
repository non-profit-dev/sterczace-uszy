// import React from "react"
// import { mount } from "cypress/react18"
// import Form from "frontend/templates/Contact/components/Form/Form"

describe("Contact Page", () => {
  it("successfully loads", () => {
    cy.visit("/kontakt/")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y(null, {
      rules: {
        "color-contrast": { enabled: false },
      },
    })
  })

  it(`renders the form heading`, () => {
    cy.get("h2").contains("Zostaw wiadomość")
  })

  // it(`sends the form after clicking "Wyślij" button`, () => {
  it(`fills up the form`, () => {
    // const handleSubmit = cy.stub().as("handleSubmitSpy")
    // mount(<Form handleSubmit={handleSubmit} submitting />)

    cy.get('input[name="Imię"]').type("test")
    cy.get('input[name="Mail"]').type("test@test")
    cy.get("select").select("dom-tymczasowy")
    cy.get("textarea").type(
      "Hi, I'm sending test message, it has to be 30 characters long."
    )

    // cy.get("button").contains("Wyślij").click()
    // cy.get("@handleSubmitSpy").should("be.called")
  })
})
