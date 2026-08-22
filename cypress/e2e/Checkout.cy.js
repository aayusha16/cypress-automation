describe("Proceed to checkout fucntionalities", ()=>{

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

       it ("Verify user can proceed to checkout after valid login")
          cy.get(selector.)

})