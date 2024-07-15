describe("Thank You Page", () => {
  it("successfully loads", () => {
    cy.visit("/podziekowanie/")
  })

  it(`should be accessible`, () => {
    cy.checkAccessibility()
  })
})
