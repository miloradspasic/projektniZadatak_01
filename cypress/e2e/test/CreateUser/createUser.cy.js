import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {
  loginErrorPlaceholders,
  successMessages,
} from "../../../support/selectors/errorPlaceholders";
import {
  buttons,
  createDetails,
  loginDetails,
} from "../../../support/selectors/userLogin";
import { faker } from "@faker-js/faker";

const randomName = faker.name.findName();
const randomLastName = faker.name.lastName();
const randomPhone = faker.phone.number();
const randomPassword = faker.internet.password()

Given("I navigate to the website", () => {
  cy.visit("/");
});

When("I go to SignUp page", () => {
  cy.get(buttons.signUp).click();
  cy.url().should("eq", "https://www.phptravels.net/signup");
});

And("I provide valid data and {string}", (accountType) => {
  cy.get(createDetails.firstName).type(randomName);
  cy.get(createDetails.lastName).type(randomLastName);
  cy.get(createDetails.phone).type(randomPhone);
  cy.get(createDetails.eMail).type(randomLastName + "@" + accountType +".com");
  cy.get(loginDetails.password).type(randomPassword);
  cy.get(createDetails.roleCombobox).click();

  cy.contains(accountType).click({force: true})
});

And("I click on SignUp button", () => {
  cy.get(buttons.signUpBlue).click();
});

Then("User is successfully created and info message is displayed", () => {
  expect(loginErrorPlaceholders.successMessageph).to.be.a("string");
  cy.get(loginErrorPlaceholders.successMessageph).contains(
    successMessages.newUsercreated
  );
});
