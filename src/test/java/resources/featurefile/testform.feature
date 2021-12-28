Feature: Adding details in test form

  Scenario: verify user should be able to add all details and click on submit
    Given I am on homepage
    When I click on next button on first page
    And  I have added first name
    And  I have added last name
    And  I click on next buttn on secondpage
    And  I have drag and dropped file from desktop
    And  I clicked on next button on draganddrop page
    And  I have added signaure
    And  I have clicked on signature next button
    And  I have sent "<date>"
    And  I should be able to click on next button on date page
    And  I should be abel to select message from dropdown
    And  I should be able to add message
    And  I should be able to click on submit button
    Then I should be able to see message