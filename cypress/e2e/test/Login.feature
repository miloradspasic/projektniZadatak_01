Feature: I want to test Login feature

    Background:
        Given I navigate to the website


    Scenario Outline: Login with valid '<username>' user

        When I enter username as '<username>' and I enter password as '<password>'
        Then User is landed on '<page>' page
        Examples:
            | username             | password  | page      |
            | user@phptravels.com  | demouser  | dashboard |
            | agent@phptravels.com | demoagent | dashboard |


    Scenario Outline: Validation is triggered and valid error message is displayed in case we provide invalid credentials
        When I try to log with invalid credentials '<iusername>' as username and '<ipassword>' as password
        Then Validation is triggered and valid error message is displayed
        Examples:
            | iusername            | ipassword |
            | iuser@phptravels.com | idemouser |


    Scenario: Validation is triggered and valid error message is displayed in case no data is provided
        When I click on Login button without data provided
        Then Validation is triggered and valid pop up error message is displayed