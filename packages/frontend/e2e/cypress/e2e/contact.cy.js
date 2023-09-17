describe("Contact Page", () => {
  it("successfully loads", () => {
    cy.visit("/kontakt/")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })

  it(`renders the form heading`, () => {
    cy.get("h2").contains("Zostaw wiadomość")
  })

  it(`sends the form after clicking submit button`, () => {
    cy.intercept("POST", "https://formspree.io/f/*", { ok: true }).as(
      "formSubmit"
    )

    cy.get('input[name="Imię"]').type("test")
    cy.get('input[name="Mail"]').type("test@test")
    cy.get('select[name="Temat"]').select("dom-tymczasowy")
    cy.get('textarea[name="Wiadomość"]').type(
      "Hi, I'm sending test message, it has to be 30 characters long."
    )
    cy.get('input[type="checkbox"]').check()

    cy.get("form").submit()

    cy.wait("@formSubmit")

    cy.get("main").contains("Wiadomość została wysłana.").should("be.visible")
  })
})
