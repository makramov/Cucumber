$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2867403306,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "LogIn, LogOut",
  "description": "",
  "id": "login-page;login,-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter username and password and clicl login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify user logged ins",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks logged out",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify user logget out",
  "keyword": "And "
});
formatter.match({
  "location": "logInlogOut.user_is_in_login_page()"
});
formatter.result({
  "duration": 165746150,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.user_gives_correct_credentials()"
});
formatter.result({
  "duration": 1362889155,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.verify_user_logged_in()"
});
formatter.result({
  "duration": 54319677,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.ser_clickd_logged_out()"
});
formatter.result({
  "duration": 1878339964,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.verify_user_logged_out()"
});
formatter.result({
  "duration": 45907548,
  "status": "passed"
});
formatter.after({
  "duration": 109645965,
  "status": "passed"
});
formatter.uri("LoginDataDriver.feature");
formatter.feature({
  "line": 1,
  "name": "Login page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1996090015,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "LogIn",
  "description": "",
  "id": "login-page;login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter username \"admin\" then password \"admin\" and click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify user logged ins",
  "keyword": "Then "
});
formatter.match({
  "location": "logInlogOut.user_is_in_login_page()"
});
formatter.result({
  "duration": 8201898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 16
    },
    {
      "val": "admin",
      "offset": 38
    }
  ],
  "location": "logInlogOut.datadriver(String,String)"
});
formatter.result({
  "duration": 1410265445,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.verify_user_logged_in()"
});
formatter.result({
  "duration": 39346287,
  "status": "passed"
});
formatter.after({
  "duration": 100766353,
  "status": "passed"
});
formatter.uri("LoginDataDriver2.feature");
formatter.feature({
  "line": 1,
  "name": "Login page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2035933741,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login-page;login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter username after password and click login button",
  "rows": [
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify user logged ins",
  "keyword": "Then "
});
formatter.match({
  "location": "logInlogOut.user_is_in_login_page()"
});
formatter.result({
  "duration": 26677672,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.tableCheck(DataTable)"
});
formatter.result({
  "duration": 1791835366,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.verify_user_logged_in()"
});
formatter.result({
  "duration": 39535757,
  "status": "passed"
});
formatter.after({
  "duration": 105093421,
  "status": "passed"
});
formatter.uri("LoginNegative.feature");
formatter.feature({
  "line": 1,
  "name": "NegLogin",
  "description": "",
  "id": "neglogin",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "NegLogIn, LogOut",
  "description": "",
  "id": "neglogin;neglogin,-logout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \u003cusername\u003e then \u003cpassword\u003e and clicl login button",
  "keyword": "When "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "neglogin;neglogin,-logout;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "neglogin;neglogin,-logout;;1"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 9,
      "id": "neglogin;neglogin,-logout;;2"
    },
    {
      "cells": [
        "",
        "admin"
      ],
      "line": 10,
      "id": "neglogin;neglogin,-logout;;3"
    },
    {
      "cells": [
        "admin",
        ""
      ],
      "line": 11,
      "id": "neglogin;neglogin,-logout;;4"
    },
    {
      "cells": [
        "admi",
        "admin"
      ],
      "line": 12,
      "id": "neglogin;neglogin,-logout;;5"
    },
    {
      "cells": [
        "admin",
        "admi"
      ],
      "line": 13,
      "id": "neglogin;neglogin,-logout;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1922109117,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "NegLogIn, LogOut",
  "description": "",
  "id": "neglogin;neglogin,-logout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter  then  and clicl login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "logInlogOut.user_is_in_login_page()"
});
formatter.result({
  "duration": 16549454,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 105179081,
  "status": "passed"
});
formatter.before({
  "duration": 1940261571,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "NegLogIn, LogOut",
  "description": "",
  "id": "neglogin;neglogin,-logout;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter  then admin and clicl login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "logInlogOut.user_is_in_login_page()"
});
formatter.result({
  "duration": 10472258,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 100185939,
  "status": "passed"
});
formatter.before({
  "duration": 2045157823,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "NegLogIn, LogOut",
  "description": "",
  "id": "neglogin;neglogin,-logout;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter admin then  and clicl login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "logInlogOut.user_is_in_login_page()"
});
formatter.result({
  "duration": 24324370,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 106737930,
  "status": "passed"
});
formatter.before({
  "duration": 1908249978,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "NegLogIn, LogOut",
  "description": "",
  "id": "neglogin;neglogin,-logout;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter admi then admin and clicl login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "logInlogOut.user_is_in_login_page()"
});
formatter.result({
  "duration": 16655490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admi",
      "offset": 6
    },
    {
      "val": "admin",
      "offset": 16
    }
  ],
  "location": "logInlogOut.user_gives_incorrect_credentials(String,String)"
});
formatter.result({
  "duration": 661835700,
  "status": "passed"
});
formatter.after({
  "duration": 99610657,
  "status": "passed"
});
formatter.before({
  "duration": 1996836598,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "NegLogIn, LogOut",
  "description": "",
  "id": "neglogin;neglogin,-logout;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter admin then admi and clicl login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "logInlogOut.user_is_in_login_page()"
});
formatter.result({
  "duration": 11944160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 6
    },
    {
      "val": "admi",
      "offset": 17
    }
  ],
  "location": "logInlogOut.user_gives_incorrect_credentials(String,String)"
});
formatter.result({
  "duration": 832267411,
  "status": "passed"
});
formatter.after({
  "duration": 97920550,
  "status": "passed"
});
});