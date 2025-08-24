Feature: Login Application

Scenario Outline: Validate the user able to login the application
Given When user clicks on the Bank application "<URL>"
When Then give the username as "<userName>" and password as "<password>"
Then Click Login to the application


Examples:
|userName | Password |URL|
|SenthilSmartQAHub | demo|https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html|
|DebitUser | demo|https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html|
|CreditUser | demo|https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html|


