describe("Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("find the link with href attribute", () => {
    cy.visit("/");
    cy.get("span").contains("Przekaż wsparcie");
  });
});
