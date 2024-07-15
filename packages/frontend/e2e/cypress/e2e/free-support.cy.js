describe("Free Support Page", () => {
  it("should successfully load", () => {
    cy.visit("/pomagaj-za-darmo")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
