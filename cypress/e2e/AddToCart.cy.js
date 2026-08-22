import { selector } from "../support/selector";

describe("JPetStore Add To Cart Functionality", () => {

  beforeEach(() => {
    cy.visit("/actions/Catalog.action");
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.log("Failed: " + this.currentTest.title);
    } else {
      cy.log("Passed: " + this.currentTest.title);
    }
  });

  it("Verify user can add valid product to cart", () => {

    cy.get(selector.search_field).type("Fish");
    cy.get(selector.searchbutton).click();
    cy.xpath(selector.FreshWater).click();
    cy.xpath(selector.Addtocart).click();

  });

  it("Verify user can add invalid product to cart", () => {

    cy.get(selector.search_field).type("mouse");
    cy.get(selector.searchbutton).click();
   

  });


it("Verify user can add product to cart", () => {

    cy.get(selector.search_field).type("Dog");
    cy.get(selector.searchbutton).click();
    cy.xpath(selector.Dog).click();
    cy.xpath(selector.Addtocart).click();

  });

  it("Verify user can add space to cart", () => {

    cy.get(selector.search_field).type("     ");
    cy.get(selector.searchbutton).click();
    

  });

  it("Verify user can add space to cart", () => {

    cy.get(selector.search_field).type("     ");
    cy.get(selector.searchbutton).click();
    

  });

  
  






});