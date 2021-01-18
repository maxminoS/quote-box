/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    // Custom commands to select and click the GET button
    clickGet(): Chainable<Subject>
  }
}
