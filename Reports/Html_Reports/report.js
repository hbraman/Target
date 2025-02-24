$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("target.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Target Website and Buy a Spiderman Toy",
  "description": "",
  "id": "user-login-target-website-and-buy-a-spiderman-toy",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login the Target Web Application",
  "description": "",
  "id": "user-login-target-website-and-buy-a-spiderman-toy;user-login-the-target-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Lanch the Target Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the Username in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the Password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click the Sign button and open to main page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Lanch_the_Target_Application()"
});
formatter.result({
  "duration": 29967613746,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_Username_in_username_field()"
});
formatter.result({
  "duration": 54957887968,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027styles__InputWrapper-sc-17c8y80-0 hypJge styles__AuthInput-sc-q9vn5-0 eeoYPi\u0027]//input\"}\n  (Session info: chrome\u003d109.0.5414.168)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PREM\u0027, ip: \u0027192.168.0.164\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002711.0.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.168, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\MR2CC6~1.PRE\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:58759}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0452759f9a7eb8bfffeaf4e7175bf379\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027styles__InputWrapper-sc-17c8y80-0 hypJge styles__AuthInput-sc-q9vn5-0 eeoYPi\u0027]//input}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.target.stepdefinition.StepDefinition.user_enter_the_Username_in_username_field(StepDefinition.java:32)\r\n\tat ✽.When User enter the Username in username field(target.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_Password_in_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_the_Sign_button_and_open_to_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "User Search the Toy items and select age",
  "description": "",
  "id": "user-login-target-website-and-buy-a-spiderman-toy;user-search-the-toy-items-and-select-age",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User Enter the toy name in Search field",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User clicks the age button and select age in age list menu and clicks apply button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User Scroll up and down to view the toys item",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select one toy name and it\u0027s open to toy details page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_toy_name_in_Search_field()"
});
formatter.result({
  "duration": 30030896807,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@placeholder\u003d\u0027What can we help you find?\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.168)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PREM\u0027, ip: \u0027192.168.0.164\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002711.0.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.168, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\MR2CC6~1.PRE\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:58759}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0452759f9a7eb8bfffeaf4e7175bf379\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder\u003d\u0027What can we help you find?\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.target.stepdefinition.StepDefinition.user_Enter_the_toy_name_in_Search_field(StepDefinition.java:49)\r\n\tat ✽.Given User Enter the toy name in Search field(target.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_age_button_and_select_age_in_age_list_menu_and_clicks_apply_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Scroll_up_and_down_to_view_the_toys_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.select_one_toy_name_and_it_s_open_to_toy_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "User Check the Toy images,Specification Details and add to card",
  "description": "",
  "id": "user-login-target-website-and-buy-a-spiderman-toy;user-check-the-toy-images,specification-details-and-add-to-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User scroll down to view first toy image",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks Details down arrowmark button to view toy details and again clicks to close",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks to one by one toy Details and Specifications",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Clicks add to card button to add first toy and clicks to continue shop button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_scroll_down_to_view_first_toy_image()"
});
formatter.result({
  "duration": 38203586867,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[text()\u003d\u0027About this item\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.168)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PREM\u0027, ip: \u0027192.168.0.164\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002711.0.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.168, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\MR2CC6~1.PRE\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:58759}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0452759f9a7eb8bfffeaf4e7175bf379\n*** Element info: {Using\u003dxpath, value\u003d//h2[text()\u003d\u0027About this item\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.target.stepdefinition.StepDefinition.user_scroll_down_to_view_first_toy_image(StepDefinition.java:99)\r\n\tat ✽.Given User scroll down to view first toy image(target.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_Details_down_arrowmark_button_to_view_toy_details_and_again_clicks_to_close()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_to_one_by_one_toy_Details_and_Specifications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_add_to_card_button_to_add_first_toy_and_clicks_to_continue_shop_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "User add another one item to add to card",
  "description": "",
  "id": "user-login-target-website-and-buy-a-spiderman-toy;user-add-another-one-item-to-add-to-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User scroll up to search box and enter toy name in search filed",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User scroll down to view toy images",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User clicks to one by one toy Details and Specifications",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Clicks add to card button to add a toy and clicks to continue shop button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_scroll_up_to_search_box_and_enter_toy_name_in_search_filed()"
});
formatter.result({
  "duration": 30051223193,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@aria-label\u003d\u0027reset\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.168)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PREM\u0027, ip: \u0027192.168.0.164\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002711.0.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.168, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\MR2CC6~1.PRE\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:58759}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0452759f9a7eb8bfffeaf4e7175bf379\n*** Element info: {Using\u003dxpath, value\u003d//button[@aria-label\u003d\u0027reset\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.target.stepdefinition.StepDefinition.user_scroll_up_to_search_box_and_enter_toy_name_in_search_filed(StepDefinition.java:142)\r\n\tat ✽.Given User scroll up to search box and enter toy name in search filed(target.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_scroll_down_to_view_toy_images()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_to_one_by_one_toy_Details_and_Specifications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_add_to_card_button_to_add_a_toy_and_clicks_to_continue_shop_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "User buying the items to cart page",
  "description": "",
  "id": "user-login-target-website-and-buy-a-spiderman-toy;user-buying-the-items-to-cart-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User clicks cart button and navigate to show added item details",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User Scroll page and view and check the added items",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User clicks to Order summary down arrowbutton and check total price details",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User clicks to select email a gift message click on button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Clicks to promo code Addbox and enter the promo code details",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User clicks to Check out all button and it\u0027s navigate to checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_cart_button_and_navigate_to_show_added_item_details()"
});
formatter.result({
  "duration": 30062777120,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[text()\u003d\u0027Order summary\u0027]//ancestor::div[@class\u003d\u0027sc-f82024d1-0 cBzSuK\u0027]//descendant::div[@data-test\u003d\u0027OrderSummary4932Total2Items-accordion\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.168)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PREM\u0027, ip: \u0027192.168.0.164\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002711.0.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.168, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\MR2CC6~1.PRE\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:58759}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0452759f9a7eb8bfffeaf4e7175bf379\n*** Element info: {Using\u003dxpath, value\u003d//h2[text()\u003d\u0027Order summary\u0027]//ancestor::div[@class\u003d\u0027sc-f82024d1-0 cBzSuK\u0027]//descendant::div[@data-test\u003d\u0027OrderSummary4932Total2Items-accordion\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.target.stepdefinition.StepDefinition.user_clicks_cart_button_and_navigate_to_show_added_item_details(StepDefinition.java:208)\r\n\tat ✽.Given User clicks cart button and navigate to show added item details(target.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Scroll_page_and_view_and_check_the_added_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_to_Order_summary_down_arrowbutton_and_check_total_price_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_to_select_email_a_gift_message_click_on_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_to_promo_code_Addbox_and_enter_the_promo_code_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_to_Check_out_all_button_and_it_s_navigate_to_checkout_page()"
});
formatter.result({
  "status": "skipped"
});
});