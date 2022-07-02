Feature: I want to create new User

        Scenario Outline: I want to create new user

                Given I navigate to the website
                When I go to SignUp page
                And I provide valid data and '<accountType>'
                And I click on SignUp button
                Then User is successfully created and info message is displayed
                Examples:
                        | accountType |
                        | Supplier    |
                        | Customer    |
                        | Agent       |


        Scenario Outline: I want to create User with already used email so error could be thrown

                Given I navigate to the website
                When I go to SignUp page
                And I provide valid data and '<accountType>' and used '<emailAddress>'
                And I click on SignUp button
                Then User is not successfully created and info message is displayed
                Examples:
                        | accountType | emailAddress         |
                        | Supplier    | agent@phptravels.com |
                        | Customer    | agent@phptravels.com |
                        | Agent       | agent@phptravels.com |