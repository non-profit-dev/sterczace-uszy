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
})
