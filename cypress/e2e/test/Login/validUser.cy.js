import {When, Then } from "cypress-cucumber-preprocessor/steps";
import {buttons, loginDetails} from "../../../support/selectors/userLogin";

Given("I navigate to the website", () => {
  cy.visit("/");
});

When(
  "I enter username as {string} and I enter password as {string}",
  (username, password) => {
    cy.get(loginDetails.email).type(username);
    cy.get(loginDetails.password).type(password);
    cy.get(buttons.login).click();
  }
);

Then("User is landed on {string} page", () => {
  cy.url().should('eq', 'https://www.phptravels.net/account/dashboard')
});

