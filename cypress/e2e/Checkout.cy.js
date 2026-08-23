import { selector } from "../support/selector";

describe("Proceed to checkout functionalities", () => {

  beforeEach(() => {
    cy.visit("/actions/Catalog.action");
    cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
    cy.get(selector.search_field).type("Fish");
    cy.get(selector.searchbutton).click();
    cy.xpath(selector.FreshWater).click();
    cy.xpath(selector.Addtocart).click();
    cy.xpath(selector.CheckoutButton).click();
  });

  it("Verify checkout page is displayed", () => {
    cy.get(selector.CardType).should("be.visible");
    cy.get(selector.CardNumber).should("be.visible");
    cy.get(selector.ExpiryField).should("be.visible");
    cy.get(selector.Biling_FirstName).should("be.visible");
    cy.get(selector.Biling_LastName).should("be.visible");
    cy.get(selector.continue).should("be.visible");
  });

  it("Verify checkout with valid payment and billing details", () => {
    cy.get(selector.CardType).select("MasterCard");
    cy.get(selector.CardNumber).clear().type("34567890987654");
    cy.get(selector.ExpiryField).clear().type("12/01");
    cy.get(selector.Biling_FirstName).clear().type("Aayusha");
    cy.get(selector.Biling_LastName).clear().type("Bisunke");
    cy.get(selector.B_Address1).clear().type("Bhaktapur");
    cy.get(selector.B_address2).clear().type("Suryabinayak");
    cy.get(selector.B_City).clear().type("Kathmandu");
    cy.get(selector.B_state).clear().type("3");
    cy.get(selector.BZip).clear().type("123");
    cy.get(selector.Bcountry).clear().type("Nepal");
    cy.get(selector.continue).click();
  });

  it("Verify checkout with default card type", () => {
    cy.get(selector.CardNumber).clear().type("34567890987654");
    cy.get(selector.ExpiryField).clear().type("12/01");
    cy.get(selector.Biling_FirstName).clear().type("Aayusha");
    cy.get(selector.Biling_LastName).clear().type("Bisunke");
    cy.get(selector.B_Address1).clear().type("Bhaktapur");
    cy.get(selector.B_City).clear().type("Kathmandu");
    cy.get(selector.B_state).clear().type("3");
    cy.get(selector.BZip).clear().type("123");
    cy.get(selector.Bcountry).clear().type("Nepal");
    cy.get(selector.continue).click();
  });

  it("Verify checkout with invalid card number", () => {
    cy.get(selector.CardNumber).clear().type("123");
    cy.get(selector.ExpiryField).clear().type("12/01");
    cy.get(selector.Biling_FirstName).clear().type("Aayusha");
    cy.get(selector.Biling_LastName).clear().type("Bisunke");
    cy.get(selector.B_Address1).clear().type("Bhaktapur");
    cy.get(selector.B_City).clear().type("Kathmandu");
    cy.get(selector.B_state).clear().type("3");
    cy.get(selector.BZip).clear().type("123");
    cy.get(selector.Bcountry).clear().type("Nepal");
    cy.get(selector.continue).click();
  });

  it("Verify checkout with empty card number", () => {
    cy.get(selector.ExpiryField).clear().type("12/01");
    cy.get(selector.Biling_FirstName).clear().type("Aayusha");
    cy.get(selector.Biling_LastName).clear().type("Bisunke");
    cy.get(selector.B_Address1).clear().type("Bhaktapur");
    cy.get(selector.B_City).clear().type("Kathmandu");
    cy.get(selector.B_state).clear().type("3");
    cy.get(selector.BZip).clear().type("123");
    cy.get(selector.Bcountry).clear().type("Nepal");
    cy.get(selector.continue).click();
  });

  it("Verify checkout with empty expiry date", () => {
    cy.get(selector.CardNumber).clear().type("34567890987654");
    cy.get(selector.Biling_FirstName).clear().type("Aayusha");
    cy.get(selector.Biling_LastName).clear().type("Bisunke");
    cy.get(selector.B_Address1).clear().type("Bhaktapur");
    cy.get(selector.B_City).clear().type("Kathmandu");
    cy.get(selector.B_state).clear().type("3");
    cy.get(selector.BZip).clear().type("123");
    cy.get(selector.Bcountry).clear().type("Nepal");
    cy.get(selector.continue).click();
  });

  it("Verify checkout with empty billing first name", () => {
    cy.get(selector.CardNumber).clear().type("34567890987654");
    cy.get(selector.ExpiryField).clear().type("12/01");
    cy.get(selector.Biling_LastName).clear().type("Bisunke");
    cy.get(selector.B_Address1).clear().type("Bhaktapur");
    cy.get(selector.B_City).clear().type("Kathmandu");
    cy.get(selector.B_state).clear().type("3");
    cy.get(selector.BZip).clear().type("123");
    cy.get(selector.Bcountry).clear().type("Nepal");
    cy.get(selector.continue).click();
  });

  it("Verify checkout with shipping address option", () => {
    cy.get(selector.Shipping).check();
    cy.get(selector.B_Address1).should("be.visible");
    cy.get(selector.B_City).should("be.visible");
    cy.get(selector.Bcountry).should("be.visible");
  });

  it("Verify checkout without shipping address option", () => {
    cy.get(selector.Shipping).uncheck();
    cy.get(selector.continue).click();
  });

});