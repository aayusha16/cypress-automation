import { selector } from "../support/selector";

describe("JpetStore Login Functionality", () => {

  it("Verify Login with valid username and password", () => {
    cy.visit("/actions/Catalog.action");
    cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
    cy.log("Logged in with valid credentials");
  });

  it("Verify Login with invalid username and password", () => {
    cy.visit("/actions/Catalog.action");
    cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click();
    cy.get(selector.username_field).type("059876522");
    cy.get(selector.password_field).type("WrongPassword@123");
    cy.get(selector.signon_field).click();
    cy.log("Tested login with invalid username and password");
  });

  it("Verify Login with invalid password", () => {
    cy.visit("/actions/Catalog.action");
    cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click();
    cy.get(selector.username_field).type(Cypress.env("USERNAME"));
    cy.get(selector.password_field).type("WrongPassword@123");
    cy.get(selector.signon_field).click();
    cy.log("Tested login with invalid password");
  });

  it("Verify Login with empty username and password", () => {
    cy.visit("/actions/Catalog.action");
    cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click();
    cy.get(selector.username_field).clear();
    cy.get(selector.password_field).clear();
    cy.get(selector.signon_field).click();
    cy.log("Tested login with empty username and password");
  });

  it("Verify Logout Feature", () => {
    cy.visit("/actions/Catalog.action");
    cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
    cy.log("Logged in successfully");
    

});
});