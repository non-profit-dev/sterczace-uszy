describe("Documents Page", () => {
  it("should successfully load", () => {
    cy.visit("/ankiety")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
