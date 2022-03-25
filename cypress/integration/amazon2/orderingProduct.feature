Feature: Product

Scenario: Ordering A Product
        Given User Is On LandingPage
        When User Search The Product
        |productname|suggestion|
        |macbook    |macbook m1|
        And User Selects The Product
        |fullproductname               |
        |2021 Apple MacBook Pro|
        Then Product Appears in Cart 