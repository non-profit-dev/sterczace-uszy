describe("Adoption Rules Page", () => {
  it("should successfully load", () => {
    cy.visit("/zasady-adopcji")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
