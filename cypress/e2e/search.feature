Feature: I search for keywords on the web zero search

    As a valid user
    I want to search data based on my keywords in zero app

    Scenario: Search Valid Data
        Given I on Zero Bank home page
        When I am fill search text box with "online" keywords and Enter
        Then I have to see a list that matches my keywords



# Scenario: Search Invalid Data
#     Given I'm on web page zero
#     And I am fill search text box with "adada" keywords
#     When I push enter
#     Then search data not found

