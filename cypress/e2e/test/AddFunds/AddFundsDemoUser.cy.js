import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {
  inputs,
  buttons,
  demoUser,
  links,
} from "../../../support/selectors/userLogin";

import { faker } from "@faker-js/faker";
const addFunds = faker.random.numeric(3, { allowLeadingZeros: false });

Given("I navigate to the website", () => {
  cy.visit("/");
});

When("I log in as demo User", () => {
  cy.demoUser(demoUser.email, demoUser.password);
});

And("I navigate to funds page", () => {
  cy.get(links.addFunds).click();
});

Then(
  "I want to add funds using following {string} as payment and land successfully on {string}",
  (paymentMethod, landingPage) => {
    cy.get(paymentMethod).click();
    cy.get(inputs.addFunds).clear().type(addFunds);
    cy.get(buttons.payNow).click();
    cy.url().should("contain", landingPage);
  }
);
