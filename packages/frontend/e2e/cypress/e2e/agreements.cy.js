describe("Agreements Page", () => {
  it("should successfully load", () => {
    cy.visit("/umowy")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
