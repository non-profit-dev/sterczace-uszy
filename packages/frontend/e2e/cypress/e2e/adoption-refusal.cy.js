describe("Adoption Refusal Page", () => {
  it("should successfully load", () => {
    cy.visit("/odmowa-adopcji")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
