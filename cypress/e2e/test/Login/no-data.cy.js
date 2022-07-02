import {When, Then } from "cypress-cucumber-preprocessor/steps";
import {buttons} from "../../../support/selectors/userLogin";
import {loginErrorPlaceholders} from "../../../support/selectors/errorPlaceholders";


When("I click on Login button without data provided", () => {
  cy.get(buttons.login).click();
});

Then(
  "Validation is triggered and valid pop up error message is displayed",
  () => {
    cy.get(loginErrorPlaceholders.popUpMessage).invoke("show");
    cy.get(loginErrorPlaceholders.popUpMessage).should("have.text", "");
  }
);
