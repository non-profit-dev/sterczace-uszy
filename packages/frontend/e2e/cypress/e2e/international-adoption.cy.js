describe("International Adoption Page", () => {
  it("should successfully load", () => {
    cy.visit("/adopcja-za-granice")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
