Feature: Navigate throw Redsauce SL page

  Scenario: As a user, I can change between spanish/english version of the blog language

    Given I am on the Redsauce SL blog
    When I click on the other language
    Then I should see the blog in english