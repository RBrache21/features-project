// cypress/integration/app.spec.js

describe("Wikipedia App", () => {
  it("should load the homepage and display the title", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Featured Articles").should("be.visible");
  });

  it("should fetch and display content", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#date-selector").click();
    cy.get(".rdp").should("be.visible");
    cy.get("#date-selector").click();
  });

  it("should navigate to content details when a card is clicked", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".article-card").first().click();

    cy.get(".article-card").first().contains("Read").should("be.visible");
  });
});
