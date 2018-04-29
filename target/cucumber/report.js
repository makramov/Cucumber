$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2997196281,
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
  "duration": 147229401,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.user_gives_correct_credentials()"
});
formatter.result({
  "duration": 1746903871,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.verify_user_logged_in()"
});
formatter.result({
  "duration": 47413545,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.ser_clickd_logged_out()"
});
formatter.result({
  "duration": 1454838222,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.verify_user_logged_out()"
});
formatter.result({
  "duration": 41884538,
  "status": "passed"
});
formatter.after({
  "duration": 98791877,
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
  "duration": 2166674146,
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
  "duration": 10774196,
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
  "duration": 1946197057,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.verify_user_logged_in()"
});
formatter.result({
  "duration": 49598391,
  "status": "passed"
});
formatter.after({
  "duration": 98967082,
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
  "duration": 2127544177,
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
  "duration": 14759546,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.tableCheck(DataTable)"
});
formatter.result({
  "duration": 2001438122,
  "status": "passed"
});
formatter.match({
  "location": "logInlogOut.verify_user_logged_in()"
});
formatter.result({
  "duration": 60083293,
  "status": "passed"
});
formatter.after({
  "duration": 97402976,
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
  "duration": 2148739734,
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
  "duration": 7720634,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 95045798,
  "status": "passed"
});
formatter.before({
  "duration": 2061189677,
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
  "duration": 14401240,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 96274362,
  "status": "passed"
});
formatter.before({
  "duration": 2089230002,
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
  "duration": 13003187,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 91139342,
  "status": "passed"
});
formatter.before({
  "duration": 2017763970,
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
  "duration": 33194214,
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
  "duration": 599351199,
  "status": "passed"
});
formatter.after({
  "duration": 92202166,
  "status": "passed"
});
formatter.before({
  "duration": 2072255243,
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
  "duration": 11864613,
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
  "duration": 801599663,
  "status": "passed"
});
formatter.after({
  "duration": 92846944,
  "status": "passed"
});
});