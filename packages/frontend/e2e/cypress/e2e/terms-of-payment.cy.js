describe("Terms Of Payment Page", () => {
  it("should successfully load", () => {
    cy.visit("/regulamin-platnosci")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
