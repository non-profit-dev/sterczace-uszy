describe("Unsuccesfull Payment Page", () => {
  it("should successfully load", () => {
    cy.visit("/nieudana-wplata")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
