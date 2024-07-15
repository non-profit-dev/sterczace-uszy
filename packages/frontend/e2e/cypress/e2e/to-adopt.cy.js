describe("Adoption Page", () => {
  it("should successfully load", () => {
    cy.visit("/do-adopcji")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
