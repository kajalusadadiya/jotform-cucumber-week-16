$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testform.feature");
formatter.feature({
  "line": 1,
  "name": "Adding details in test form",
  "description": "",
  "id": "adding-details-in-test-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4669534500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify user should be able to add all details and click on submit",
  "description": "",
  "id": "adding-details-in-test-form;verify-user-should-be-able-to-add-all-details-and-click-on-submit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on next button on first page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I have added first name",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I have added last name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on next buttn on secondpage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I have drag and dropped file from desktop",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I clicked on next button on draganddrop page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I have added signaure",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I have clicked on signature next button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I have sent \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be able to click on next button on date page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be abel to select message from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to add message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see message",
  "keyword": "Then "
});
formatter.match({
  "location": "TestFormSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 133393299,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iClickOnNextButtonOnFirstPage()"
});
formatter.result({
  "duration": 95373600,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveAddedFirstName()"
});
formatter.result({
  "duration": 88737200,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveAddedLastName()"
});
formatter.result({
  "duration": 76047300,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iClickOnNextButtnOnSecondpage()"
});
formatter.result({
  "duration": 94028400,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveDragAndDroppedFileFromDesktop()"
});
formatter.result({
  "duration": 103174900,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iClickedOnNextButtonOnDraganddropPage()"
});
formatter.result({
  "duration": 90105600,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveAddedSignaure()"
});
formatter.result({
  "duration": 8739200,
  "status": "passed"
});
formatter.match({
  "location": "TestFormSteps.iHaveClickedOnSignatureNextButton()"
});
formatter.result({
  "duration": 99310300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cdate\u003e",
      "offset": 13
    }
  ],
  "location": "TestFormSteps.iHaveSent(String)"
});
formatter.result({
  "duration": 1220304701,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003csvg data-name\u003d\"Layer 1\" xmlns\u003d\"http://www.w3.org/2000/svg\" viewBox\u003d\"0 0 83.65 83.47\"\u003e...\u003c/svg\u003e is not clickable at point (1299, 291). Other element would receive the click: \u003cul class\u003d\"jfForm-all form-section page-section form-all transition-all-03s\" id\u003d\"cardAnimationWrapper\" style\u003d\"transform: translate3d(-2820px, 0px, 0px) scale3d(1, 1, 1); transform-origin: 3588px 50% 0px; width: 4998px;\"\u003e...\u003c/ul\u003e\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OT5FJEMN\u0027, ip: \u0027192.168.1.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [19fed8494351a50f06ef7b479bb75b36, clickElement {id\u003d09cbe09c-6320-46bf-aa80-9805c74b1b16}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\KAJALU~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53305}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53305/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (19fed8494351a50f06ef7b479bb75b36)] -\u003e xpath: //span[@aria-label\u003d\u0027Calendar icon\u0027]//*[name()\u003d\u0027svg\u0027]]\nSession ID: 19fed8494351a50f06ef7b479bb75b36\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.jotform.form.utility.Utility.clickOnElement(Utility.java:50)\r\n\tat com.jotform.form.pages.HomePage.clickOnCalender(HomePage.java:88)\r\n\tat com.jotform.form.cucumber.steps.TestFormSteps.iHaveSent(TestFormSteps.java:61)\r\n\tat ✽.And I have sent \"\u003cdate\u003e\"(testform.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestFormSteps.iShouldBeAbleToClickOnNextButtonOnDatePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestFormSteps.iShouldBeAbelToSelectMessageFromDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestFormSteps.iShouldBeAbleToAddMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestFormSteps.iShouldBeAbleToClickOnSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestFormSteps.iShouldBeAbleToSeeMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 901556600,
  "status": "passed"
});
});