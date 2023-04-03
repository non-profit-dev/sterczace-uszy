describe("Support Page", () => {
  it("should successfully load", () => {
    cy.visit("/wsparcie")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
