describe("About Page", () => {
  it("should successfully load", () => {
    cy.visit("/fundacja")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
