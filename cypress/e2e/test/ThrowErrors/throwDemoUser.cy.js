import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {
  inputs,
  buttons,
  links,
  demoUser,
} from "../../../support/selectors/userLogin";
import { loginErrorPlaceholders } from "../../../support/selectors/errorPlaceholders";

Given("I navigate to the website", () => {
  cy.visit("/");
});

When("I log in as demo User", () => {
  cy.demoUser(demoUser.email, demoUser.password);
});

And("I navigate to funds page", () => {
  cy.get(links.addFunds).click();
});

Then("I invoke error page for following {string}", (paymentMethod) => {
  cy.get(paymentMethod).click();
  cy.get(inputs.addFunds).clear();
  cy.get(buttons.payNow).click();
  cy.get(loginErrorPlaceholders.fundsMessage).should("be.visible");
  cy.get(loginErrorPlaceholders.fundsMessage).should(
    "have.text",
    "Unsupported operand types: int + string"
  );
});
