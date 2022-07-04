Feature: Error is thrown in case invalid email is provided for "Reset Password" feature

    Scenario: User submits invalid email address

        Given I navigate to the website
        When I click [Reset password] hyperlink and submit invalid email address
        Then Validation is triggered and valid error message is displayed
