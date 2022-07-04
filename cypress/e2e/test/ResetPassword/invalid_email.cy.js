import {When, Then } from "cypress-cucumber-preprocessor/steps";
import { links, loginDetails} from "../../../support/selectors/userLogin";
import {loginErrorPlaceholders, errorMessages} from "../../../support/selectors/errorPlaceholders"
import { faker } from "@faker-js/faker";

const invalidEmail = faker.internet.email()
Given("I navigate to the website", () => {
  cy.visit("/");
});

When(
  "I click [Reset password] hyperlink and submit invalid email address",
  () => {
      cy.get(links.resetPass).click()
        cy.get(loginDetails.resetPassword).type(invalidEmail+'{ENTER}')
   }
);

Then("Validation is triggered and valid error message is displayed", () => {
    cy.get(loginErrorPlaceholders.alertBox).contains(errorMessages.emailDoesntExist);
    expect(loginErrorPlaceholders.successMessageph).to.be.a("string");
});