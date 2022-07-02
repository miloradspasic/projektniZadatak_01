Feature: I want to add funds to the user

    Background:
        Given I navigate to the website


    Scenario Outline: Add funds with demo User

        When I log in as demo User
        And I navigate to funds page
        Then I want to add funds using following '<paymentMethod>' as payment and land successfully on '<landingPage>'

        Examples:
            | paymentMethod                | landingPage           |
            | [id="gateway_stripe"]        | stripe                |
            | [id="gateway_paypal"]        | paypal                |
            | [id="gateway_bank-transfer"] | payment/bank-transfer |


    Scenario Outline: Add funds with demo Agent

        When I log in as demo Agent
        And I navigate to funds page
        Then I want to add funds using following '<paymentMethod>' as payment and land successfully on '<landingPage>'

        Examples:
            | paymentMethod                | landingPage           |
            | [id="gateway_stripe"]        | stripe                |
            | [id="gateway_paypal"]        | paypal                |
            | [id="gateway_bank-transfer"] | payment/bank-transfer |

   