import { selector } from "../support/selector";

describe("Search Functionality", () => {

  beforeEach(() => {
    cy.visit("/actions/Account.action?newAccountForm=");
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.log("Failed: " + this.currentTest.title);
    } else {
      cy.log("Passed: " + this.currentTest.title);
    }
  });


it ("Verify Search with Valid Product ", ()=>{
cy.get(selector.search_field).type("Fish");
cy.get(selector.searchbutton).click();
});


it("Search using partial keyword",()=>{
cy.get(selector.search_field).type("D");
cy.get(selector.searchbutton).click();
})



it("Search with uppercase keyword", ()=>{
    cy.get(selector.search_field).type("SNAKE");
    cy.get(selector.searchbutton).click();

});


it("Search with lowercase keyword", ()=>{
    cy.get(selector.search_field).type("snake");
    cy.get(selector.searchbutton).click();
});


it("Search with only spaces", () =>{
    cy.get(selector.search_field).type("    ");
    cy.get(selector.searchbutton).click();
 
});


it("Search with numbers",()=>{
    cy.get(selector.search_field).type("2345");
    cy.get(selector.searchbutton).click();
});

it("Search using special characters",()=>{
    cy.get(selector.search_field).type("%");
    cy.get(selector.searchbutton).click();
});

it("Search using SQL-like characters", ()=>{
    cy.get(selector.search_field).type("' OR '1'='1");
    cy.get(selector.searchbutton).click();
});
});