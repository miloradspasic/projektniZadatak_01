import {When, Then } from "cypress-cucumber-preprocessor/steps";
import {buttons, loginDetails} from "../../../support/selectors/userLogin";
import {loginErrorPlaceholders, errorMessages} from "../../../support/selectors/errorPlaceholders";

When(
  "I try to log with invalid credentials {string} as username and {string} as password",
  (iusername, ipassword) => {
    cy.get(loginDetails.email).type(iusername);
    cy.get(loginDetails.password).type(ipassword);
    cy.get(buttons.login).click();
  }
);

Then("Validation is triggered and valid error message is displayed", () => {
  cy.get(loginErrorPlaceholders.field).contains(errorMessages.wrongDetails)
});
