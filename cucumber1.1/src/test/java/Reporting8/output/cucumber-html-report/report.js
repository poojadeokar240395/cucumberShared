$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:mynewpkg/new.feature");
formatter.feature({
  "name": "Test Calculator",
  "description": "This file calculator functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add two numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "enter 50 first",
  "keyword": "Given "
});
formatter.match({
  "location": "step.enter_50_first()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter symbol add",
  "keyword": "And "
});
formatter.match({
  "location": "step.enter_symbol_add()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter 40",
  "keyword": "And "
});
formatter.match({
  "location": "step.enter_40()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter equal symbol",
  "keyword": "When "
});
formatter.match({
  "location": "step.enter_equal_symbol()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "reult 100",
  "keyword": "Then "
});
formatter.match({
  "location": "step.reult_100()"
});
formatter.result({
  "status": "passed"
});
});