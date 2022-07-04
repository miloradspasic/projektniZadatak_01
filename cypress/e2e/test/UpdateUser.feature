Feature: I want to check that user can be successfully updated

    Scenario: Success message is thrown when valid data is provided and user profile is updated
        Given I navigate to the website
        When I log in as Demo user
        And I navigate to My Profile page
        And I provide valid data
        And I click on [Update Profile] button
        Then User data is successfully updated and success message is thrown

    Scenario: Success message is thrown when valid data is provided and user profile is updated
        Given I navigate to the website
        When I log in as Demo Agent
        And I navigate to My Profile page
        And I provide valid data
        And I click on [Update Profile] button
        Then User data is successfully updated and success message is thrown