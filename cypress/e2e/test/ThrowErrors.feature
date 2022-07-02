Feature: I want to validate errors thrown upon invalid data provided


    Background:
        Given I navigate to the website

    Scenario Outline: Cast funds errors as Demo Agent

        When I log in as demo Agent
        And I navigate to funds page
        Then I invoke error page for following '<paymentMethod>'

        Examples:
            | paymentMethod                |
            | [id="gateway_stripe"]        |
            | [id="gateway_paypal"]        |
            | [id="gateway_bank-transfer"] |

    Scenario Outline: Cast funds errors as Demo User

        When I log in as demo User
        And I navigate to funds page
        Then I invoke error page for following '<paymentMethod>'

        Examples:
            | paymentMethod                |
            | [id="gateway_stripe"]        |
            | [id="gateway_paypal"]        |
            | [id="gateway_bank-transfer"] |