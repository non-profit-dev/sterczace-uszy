describe("HomeFound Page", () => {
  it("should successfully load", () => {
    cy.visit("/znalazly-dom")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
