describe("Support After Adoption Page", () => {
  it("should successfully load", () => {
    cy.visit("/wsparcie-po-adopcji")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
