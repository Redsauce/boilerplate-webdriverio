Feature: Navigate throw Redsauce SL page

  Scenario: As a user, I can change between spanish/english version of the blog language

    Given I am on the Redsauce SL blog
    When I change the current language to Spanish
    Then I should see the blog in Spanish