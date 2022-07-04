import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {
  buttons,
  links, agentUser,
  updateDetails,
} from "../../../support/selectors/userLogin";
import {successMessages, loginErrorPlaceholders} from "../../../support/selectors/errorPlaceholders"

import { faker } from "@faker-js/faker";

const fakeAddress1 = faker.address.streetAddress()
const fakeAddress2 = faker.address.streetAddress()
const fakeState = faker.address.state()
const fakeCity = faker.address.city()
const fakePhone = faker.phone.number();


Given("I navigate to the website", () => {
  cy.visit("/");
});

When("I log in as Demo Agent", () => {
  cy.demoAgent(agentUser.email, agentUser.password);
});

And("I navigate to My Profile page", () => {
  cy.get(links.myProfile).click();
});

And("I provide valid data", () => {
    cy.get(updateDetails.phone).clear().type(fakePhone)
    cy.get(updateDetails.state).clear().type(fakeState)
    cy.get(updateDetails.city).clear().type(fakeCity)
    cy.get(updateDetails.address1).clear().type(fakeAddress1)
    cy.get(updateDetails.address2).clear().type(fakeAddress2)

});

And("I click on [Update Profile] button", () => {
    cy.get(buttons.updateProfile).click()
});

Then(
  "User data is successfully updated and success message is thrown",
  () => {
    cy.get(loginErrorPlaceholders.updateProfile).contains(successMessages.profileUpdated);
    expect(successMessages.profileUpdated).to.be.a("string");
  }
);
