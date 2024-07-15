describe("Documents Page", () => {
  it("should successfully load", () => {
    cy.visit("/ankiety")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
