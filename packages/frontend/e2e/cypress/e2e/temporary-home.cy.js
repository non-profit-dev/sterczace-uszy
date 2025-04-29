describe("Temporary Home", () => {
  it("should successfully load", () => {
    cy.visit("/dom-tymczasowy")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
