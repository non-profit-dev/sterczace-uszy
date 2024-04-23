describe("Donations Page", () => {
  it("should successfully load", () => {
    cy.visit("/wplaty")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
