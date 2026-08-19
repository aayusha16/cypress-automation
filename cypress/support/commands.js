// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { selector } from "./selector";

Cypress.Commands.add("login", (username, password) => {

  cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click();

  cy.get(selector.username_field)
    .clear()
    .type(username);

  cy.get(selector.password_field)
    .clear()
    .type(password);

  cy.get(selector.signon_field)
    .click();
});