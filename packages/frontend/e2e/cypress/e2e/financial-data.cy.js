describe("Financial Data Page", () => {
  it("should successfully load", () => {
    cy.visit("/dane-finansowe")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
