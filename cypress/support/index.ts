require("@cypress/snapshot").register();

Cypress.Commands.add("clickGet", () => {
  cy.get(".MuiButton-label")
    .contains("GET").click();
});
