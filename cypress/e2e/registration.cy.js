import { selector } from "../support/selector";

describe("JpetStore Registration Functionality", () => {

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

  it("Verify Registration with valid user information", () => {
    const username = `Rose${Date.now()}`;
    const email = `rose${Date.now()}@gmail.com`;

    cy.get(selector.userid_field).type(username);
    cy.get(selector.reset_password).type("JpETSTORE@123");
    cy.get(selector.repeated_password).type("JpETSTORE@123");
    cy.get(selector.firstname).type("Rosemary");
    cy.get(selector.lastname).type("Merry");
    cy.get(selector.email_field).type(email);
    cy.get(selector.phone_field).type("9876676688");
    cy.get(selector.address1).type("Bhaktapur");
    cy.get(selector.address2).type("Suryabinayak");
    cy.get(selector.city_field).type("Kathmandu");
    cy.get(selector.state_field).type("5");
    cy.get(selector.zip_field).type("699");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.language_field).select("japanese");
    cy.get(selector.favCategory_id).select("FISH");
    cy.get(selector.newAccount).click();

    cy.log("Registered with valid credentials");
  });

  it("Verify registration with an already registered User ID", () => {
    cy.get(selector.userid_field).type("05925608");
    cy.get(selector.reset_password).type("JpETSTORE@123");
    cy.get(selector.repeated_password).type("JpETSTORE@123");
    cy.get(selector.firstname).type("Patrick");
    cy.get(selector.lastname).type("Jane");
    cy.get(selector.email_field).type("dvgcvd@gmail.com");
    cy.get(selector.phone_field).type("9867565657");
    cy.get(selector.address1).type("Bhaktapur");
    cy.get(selector.address2).type("Suryabinayak");
    cy.get(selector.city_field).type("Kathmandu");
    cy.get(selector.state_field).type("5");
    cy.get(selector.zip_field).type("123");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.language_field).select("english");
    cy.get(selector.favCategory_id).select("FISH");
    cy.get(selector.newAccount).click();

    cy.log("Tested registration with already registered User ID");
  });

  it("Verify registration with mismatched passwords", () => {
    const username = `Simon${Date.now()}`;
    const email = `simon${Date.now()}@gmail.com`;

    cy.get(selector.userid_field).type(username);
    cy.get(selector.reset_password).type("JpETSTORE@321");
    cy.get(selector.repeated_password).type("JpETSTORE@123");
    cy.get(selector.firstname).type("Simon");
    cy.get(selector.lastname).type("Scofield");
    cy.get(selector.email_field).type(email);
    cy.get(selector.phone_field).type("9887875641");
    cy.get(selector.address1).type("Thimi");
    cy.get(selector.address2).type("Radhe Radhe");
    cy.get(selector.city_field).type("Bhaktapur");
    cy.get(selector.state_field).type("5");
    cy.get(selector.zip_field).type("699");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.language_field).select("japanese");
    cy.get(selector.favCategory_id).select("FISH");
    cy.get(selector.newAccount).click();

    cy.log("Tested registration with mismatched passwords");
  });

  it("Verify registration with all fields empty", () => {
    cy.get(selector.newAccount).click();

    cy.log("Tested registration with all fields empty");
  });

  it("Verify registration with invalid email format", () => {
    const username = `InvalidEmail${Date.now()}`;

    cy.get(selector.userid_field).type(username);
    cy.get(selector.reset_password).type("JpETSTORE@123");
    cy.get(selector.repeated_password).type("JpETSTORE@123");
    cy.get(selector.firstname).type("Simon");
    cy.get(selector.lastname).type("Scofield");
    cy.get(selector.email_field).type("scofieldgmail.com");
    cy.get(selector.phone_field).type("9887875641");
    cy.get(selector.address1).type("Thimi");
    cy.get(selector.address2).type("Radhe Radhe");
    cy.get(selector.city_field).type("Bhaktapur");
    cy.get(selector.state_field).type("5");
    cy.get(selector.zip_field).type("699");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.language_field).select("japanese");
    cy.get(selector.favCategory_id).select("FISH");
    cy.get(selector.newAccount).click();

    cy.log("Tested registration with invalid email format");
  });

  it("Verify registration with alphanumeric value in phone field", () => {
    const username = `PhoneTest${Date.now()}`;
    const email = `phone${Date.now()}@gmail.com`;

    cy.get(selector.userid_field).type(username);
    cy.get(selector.reset_password).type("JpETSTORE@123");
    cy.get(selector.repeated_password).type("JpETSTORE@123");
    cy.get(selector.firstname).type("Simon");
    cy.get(selector.lastname).type("Scofield");
    cy.get(selector.email_field).type(email);
    cy.get(selector.phone_field).type("987ABC6676");
    cy.get(selector.address1).type("Thimi");
    cy.get(selector.address2).type("Radhe Radhe");
    cy.get(selector.city_field).type("Bhaktapur");
    cy.get(selector.state_field).type("5");
    cy.get(selector.zip_field).type("699");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.language_field).select("japanese");
    cy.get(selector.favCategory_id).select("FISH");
    cy.get(selector.newAccount).click();

    cy.log("Tested registration with alphanumeric phone number");
  });

  it("Verify registration with numeric value in username field", () => {
    const numericUsername = Date.now().toString().slice(-8);
    const email = `numeric${Date.now()}@gmail.com`;

    cy.get(selector.userid_field).type(numericUsername);
    cy.get(selector.reset_password).type("JpETSTORE@123");
    cy.get(selector.repeated_password).type("JpETSTORE@123");
    cy.get(selector.firstname).type("1234");
    cy.get(selector.lastname).type("1234");
    cy.get(selector.email_field).type(email);
    cy.get(selector.phone_field).type("9867656565");
    cy.get(selector.address1).type("Thimi");
    cy.get(selector.address2).type("Radhe Radhe");
    cy.get(selector.city_field).type("Bhaktapur");
    cy.get(selector.state_field).type("5");
    cy.get(selector.zip_field).type("699");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.language_field).select("japanese");
    cy.get(selector.favCategory_id).select("FISH");
    cy.get(selector.newAccount).click();

    cy.log("Tested registration with numeric username");
  });

  it("Verify registration with alphanumeric value in zip field", () => {
    const username = `ZipTest${Date.now()}`;
    const email = `zip${Date.now()}@gmail.com`;

    cy.get(selector.userid_field).type(username);
    cy.get(selector.reset_password).type("JpETSTORE@123");
    cy.get(selector.repeated_password).type("JpETSTORE@123");
    cy.get(selector.firstname).type("Simon");
    cy.get(selector.lastname).type("Scofield");
    cy.get(selector.email_field).type(email);
    cy.get(selector.phone_field).type("9867656565");
    cy.get(selector.address1).type("Thimi");
    cy.get(selector.address2).type("Radhe Radhe");
    cy.get(selector.city_field).type("Bhaktapur");
    cy.get(selector.state_field).type("5");
    cy.get(selector.zip_field).type("abc");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.language_field).select("japanese");
    cy.get(selector.favCategory_id).select("FISH");
    cy.get(selector.newAccount).click();

    cy.log("Tested registration with alphanumeric ZIP code");
  });

});