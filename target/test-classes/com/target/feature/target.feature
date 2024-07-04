Feature: User Login Target Website and Buy a Spiderman Toy

Scenario: User Login the Target Web Application
Given User Lanch the Target Application
When User enter the Username in username field
And User enter the Password in password field
Then User click the Sign button and open to main page

Scenario: User Search the Toy items and select age
Given User Enter the toy name in Search field
When User clicks the age button and select age in age list menu and clicks apply button
And User Scroll up and down to view the toys item 
Then select one toy name and it's open to toy details page

Scenario: User Check the Toy images,Specification Details and add to card
Given User scroll down to view first toy image
When User clicks Details down arrowmark button to view toy details and again clicks to close
And User clicks to one by one toy Details and Specifications
Then User Clicks add to card button to add first toy and clicks to continue shop button

Scenario: User add another one item to add to card
Given User scroll up to search box and enter toy name in search filed
When User scroll down to view toy images
And User clicks to one by one toy Details and Specifications
Then user Clicks add to card button to add a toy and clicks to continue shop button

Scenario: User buying the items to cart page
Given User clicks cart button and navigate to show added item details
When User Scroll page and view and check the added items
And User clicks to Order summary down arrowbutton and check total price details
And User clicks to select email a gift message click on button
And User Clicks to promo code Addbox and enter the promo code details 
Then User clicks to Check out all button and it's navigate to checkout page
 




