describe("Home Page", () => {
  it("should successfully load", () => {
    cy.visit("/");
  });

  it(`should be accessible`, () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
