describe("Partners & Discounts Page", () => {
  it("should successfully load", () => {
    cy.visit("/partnerzy-i-znizki")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
