describe("International Adoption Page", () => {
  it("should successfully load", () => {
    cy.visit("/international-adoption")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
