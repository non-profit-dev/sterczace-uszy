describe("Temporary Home", () => {
  it("should successfully load", () => {
    cy.visit("/dom-tymczasowy")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
