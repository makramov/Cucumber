Feature: NegLogin

Scenario Outline: NegLogIn, LogOut

Given User is in login page
When Enter <username> then <password> and clicl login button
Examples:
| username | password | 
|          |          |
|          | admin    |
| admin    |          |
| admi     | admin    | 
| admin    | admi     |
