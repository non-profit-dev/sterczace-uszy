describe("Pre Adoption Visit Page", () => {
  it("should successfully load", () => {
    cy.visit("/wizyta-przedadopcyjna")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
