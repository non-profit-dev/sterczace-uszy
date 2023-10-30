describe("Before Adoption Page", () => {
  it("should successfully load", () => {
    cy.visit("/zanim-adoptujesz")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
