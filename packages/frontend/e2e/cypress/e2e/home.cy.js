describe("Home Page", () => {
  it("should successfully load", () => {
    cy.visit("/")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
