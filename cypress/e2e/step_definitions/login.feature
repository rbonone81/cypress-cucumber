Feature: Login

Scenario: Valid Login
    Given I am on login page
    When I type email with 'standard_user'
    And I type password with 'secret_sauce'
    And I click on submit button
    Then I have a successful login