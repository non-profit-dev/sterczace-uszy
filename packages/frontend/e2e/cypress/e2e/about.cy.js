describe("About Page", () => {
  it("should successfully load", () => {
    cy.visit("/fundacja")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
