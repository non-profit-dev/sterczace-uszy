describe("Virtual Adoption Page", () => {
  it("should successfully load", () => {
    cy.visit("/adopcja-wirtualna")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
