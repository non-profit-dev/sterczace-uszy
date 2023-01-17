describe("Home Page", () => {
  it("should successfully load", () => {
    cy.visit("/");
  });

  it(`should be accessible`, () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it(`should render the main heading`, () => {
    cy.get("h1").contains("Strona w budowie");
  });

  it("should have correct links", () => {
    cy.get("a:not([href*='mailto:'])").each((page) => {
      cy.request(page.prop("href"));
    });
  });

  it("should have proper social media links", () => {
    cy.get(`a[aria-label="Visit our Facebook profile"]`)
      .should(`have.attr`, `href`)
      .and(`match`, /facebook.com\/sterczaceuszy/);

    cy.get(`a[aria-label="Visit our Instagram profile"]`)
      .should(`have.attr`, `href`)
      .and(`match`, /instagram.com\/sterczaceuszy/);
  });
});
