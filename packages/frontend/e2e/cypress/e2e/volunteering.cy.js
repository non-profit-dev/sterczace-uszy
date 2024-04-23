describe("Volunteering Page", () => {
  it("should successfully load", () => {
    cy.visit("/wolontariat")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
