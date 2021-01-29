/// <reference path="../support/index.d.ts" />
describe("Quote Box", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    // Wait for quote to load
    cy.get(".MuiTypography-h6", { timeout: 30000 }).as("quote");
    cy.get(".MuiTypography-subtitle1", { timeout: 30000 }).as("author");
  });

  it("loads quotes with GET button", () => {
    // Save first quote
    let firstQuote = {
      "quote": cy.get("@quote").invoke("text"),
      "author": cy.get("@author").invoke("text")
    };

    // Click GET button
    cy.clickGet();

    // Wait for new quote to load
    cy.get(".MuiCardContent-root > .MuiSvgIcon-root > path", { timeout: 30000 });

    // Quote has changed
    cy.get("@quote").should("not.contain", firstQuote.quote);
    cy.get("@author").should("not.contain", firstQuote.author);
  });

  it("renders dark theme with the theme button", () => {
    cy.get("[data-testid=theme-button]")
      .snapshot({ name: "Light mode" })
      .click()
      .snapshot({ name: "Dark mode" });
  });
});
