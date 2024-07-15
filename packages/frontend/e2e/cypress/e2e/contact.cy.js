describe("Contact Page", () => {
  it("successfully loads", () => {
    cy.visit("/kontakt/")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })

  it(`renders the form heading`, () => {
    cy.get("h2").contains("Zostaw wiadomość")
  })

  it(`sends the form after clicking submit button`, () => {
    cy.intercept("POST", "https://formspree.io/f/*", {
      next: "/thanks?language=pl",
      ok: true,
    }).as("formSubmit")

    cy.get("form").scrollIntoView()

    cy.get('input[name="firstName"]').type("test")
    cy.get('input[name="email"]').type("test@gmail.com")
    cy.get('select[name="subject"]').select("Dom tymczasowy")
    cy.get('textarea[name="message"]').type(
      "Hi, I'm sending test message, it has to be 30 characters long."
    )
    cy.get('input[type="checkbox"]').check()

    cy.get("form").submit()

    cy.wait("@formSubmit")

    cy.get("main").contains("Wiadomość została wysłana.").should("be.visible")
  })
})
