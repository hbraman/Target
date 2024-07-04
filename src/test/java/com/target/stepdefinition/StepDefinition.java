package com.target.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.baseclass.BaseClass;
import com.target.runner.RunnerClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass{

public static WebDriver driver= RunnerClass.driver;
	
	
	@Given("^User Lanch the Target Application$")
	public void user_Lanch_the_Target_Application() throws Throwable {
		getUrl("https://www.target.com/");
		WebElement signin = driver.findElement(By.xpath("//a[@aria-label='Account, sign in']"));
		clickOnElement(signin);
		sleep(3000);
	}

	@When("^User enter the Username in username field$")
	public void user_enter_the_Username_in_username_field() throws Throwable {
		WebElement sinin = driver.findElement(By.xpath("//div[@data-test='content-wrapper']//ul//li//a//span[text()='Sign in']"));
		clickOnElement(sinin);
		sleep(5000);
		WebElement username = driver.findElement(By.xpath("//div[@class='styles__InputWrapper-sc-17c8y80-0 hypJge styles__AuthInput-sc-q9vn5-0 eeoYPi']//input"));
		inputValueElement(username, "hbraman93@gmail.com");
	}

	@When("^User enter the Password in password field$")
	public void user_enter_the_Password_in_password_field() throws Throwable {
		WebElement password = driver.findElement(By.xpath("//div[@class='styles__InputWrapper-sc-17c8y80-0 bUAMkG styles__AuthInput-sc-q9vn5-0 eeoYPi']//input"));
		inputValueElement(password, "Hello@target");
	}

	@Then("^User click the Sign button and open to main page$")
	public void user_click_the_Sign_button_and_open_to_main_page() throws Throwable {
		getUrl("https://www.target.com/");
	}

	@Given("^User Enter the toy name in Search field$")
	public void user_Enter_the_toy_name_in_Search_field() throws Throwable {
		driver.findElement(By.xpath("//input[@placeholder='What can we help you find?']")).sendKeys("Spiderman toy");
		sleep(2000);
		driver.findElement(By.xpath("//input[@id='search']//ancestor::div[1]//descendant::span[@class='h-text-normal']//b[text()='s for boys']")).click();
		sleep(4000);
	}

	@When("^User clicks the age button and select age in age list menu and clicks apply button$")
	public void user_clicks_the_age_button_and_select_age_in_age_list_menu_and_clicks_apply_button() throws Throwable {
		WebElement age = driver.findElement(By.xpath("//div[@class='styles__FacetButtonContainer-sc-lrdzvz-0 NogpL']//button[@data-test='facet-button-Age']"));
		clickOnElement(age);
		sleep(2000);
		WebElement age2 = driver.findElement(By.xpath("//label[@for='chk-5zl3y']//input[@type='checkbox']"));
		radioButton(age2);
		sleep(2000);
		WebElement ageapply = driver.findElement(By.xpath("//button[text()='Apply']"));
		clickOnElement(ageapply);
		sleep(4000);

	}

	@When("^User Scroll up and down to view the toys item$")
	public void user_Scroll_up_and_down_to_view_the_toys_item() throws Throwable {
		scrollDown(0, 8000);
		sleep(2000);
		scrollFullDown();
		sleep(2000);
		scrollUp(0, -4000);
		sleep(2000);
		scrollUp(0,-4000);
		sleep(2000);

	}

	@Then("^select one toy name and it's open to toy details page$")
	public void select_one_toy_name_and_it_s_open_to_toy_details_page() throws Throwable {
		WebElement toy1 = driver.findElement(By.xpath("//span[text()='for “spiderman toys for boys”']//ancestor::div[5]//descendant::div[@class='styles__ProductCardVariantDefaultWrapper-sc-9lksuw-4 fTrrfI']"));
		clickOnElement(toy1);
		sleep(4000);
	}

	@Given("^User scroll down to view first toy image$")
	public void user_scroll_down_to_view_first_toy_image() throws Throwable {
		scrollDown(0, 500);
		sleep(2000);
		scrollDown(0, 500);
		sleep(2000);
		scrollDown(0, 400);
		sleep(2000);
		scrollDown(0, 300);
		sleep(2000);
		WebElement scrollinto = driver.findElement(By.xpath("//h2[text()='About this item']"));
		scrollIntoView(scrollinto);
		sleep(3000);

	}

	@When("^User clicks Details down arrowmark button to view toy details and again clicks to close$")
	public void user_clicks_Details_down_arrowmark_button_to_view_toy_details_and_again_clicks_to_close() throws Throwable {
		WebElement details = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Details']"));
		details.click();
		sleep(3000);
		details.click();
	}

	@When("^User clicks to one by one toy Details and Specifications$")
	public void user_clicks_to_one_by_one_toy_Details_and_Specifications() throws Throwable {
		WebElement spec = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Specifications']"));
		spec.click();
		sleep(3000);
		spec.click();
		WebElement shipping = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Shipping & Returns']"));
		shipping.click();
		sleep(3000);
		shipping.click();
		sleep(3000);

	}

	@Then("^User Clicks add to card button to add first toy and clicks to continue shop button$")
	public void user_Clicks_add_to_card_button_to_add_first_toy_and_clicks_to_continue_shop_button() throws Throwable {
		WebElement scrollinto1 = driver.findElement(By.xpath("//button[text()='Add to cart']"));
		scrollIntoView(scrollinto1);
		sleep(3000);
		WebElement addtoCard = driver.findElement(By.xpath("//div[@id='above-the-fold-information']//button[text()='Add to cart']"));
		clickOnElement(addtoCard);
		sleep(4000);
		WebElement continueShop = driver.findElement(By.xpath("//button[text()='Continue shopping']"));
		clickOnElement(continueShop);
		sleep(3000);
	}

	@Given("^User scroll up to search box and enter toy name in search filed$")
	public void user_scroll_up_to_search_box_and_enter_toy_name_in_search_filed() throws Throwable {
		driver.findElement(By.xpath("//button[@aria-label='reset']")).click();
		sleep(3000);
		WebElement search2 = driver.findElement(By.xpath("//form[@class='styles__SearchForm-sc-wnzihy-1 bNqoRc']//input[@data-test='@web/Search/SearchInput']"));
		search2.sendKeys("batman");
		sleep(2000);
		WebElement toys2 = driver.findElement(By.xpath("//div[@id='SearchTypeaheadOverlay']//descendant::span[@class='h-text-normal']//b[text()=' toys']"));
		sleep(4000);
		clickOnElement(toys2);
		sleep(4000);

	}

	@When("^User scroll down to view toy images$")
	public void user_scroll_down_to_view_toy_images() throws Throwable {
		scrollDown(0, 8000);
		sleep(2000);
		scrollUp(0, -4000);
		sleep(2000);
		scrollUp(0,-4000);
		sleep(2000);
		WebElement toyelement2 = driver.findElement(By.xpath("//div[@data-test='intentFacetCardsContainer']//following::section//div[@data-test='@web/ProductCard/body']//div[@title='LEGO DC Batmobile Pursuit: Batman vs. The Joker Super Hero Toy 76264']//a[1]"));
		clickOnElement(toyelement2);
		sleep(4000);
		scrollDown(0, 500);
		sleep(2000);
		scrollDown(0, 500);
		sleep(2000);
		scrollDown(0, 400);
		sleep(2000);
		scrollDown(0, 300);
		sleep(2000);
/*
		WebElement scrolltoView = driver.findElement(By.xpath("//h2[text()='About this item']"));
		scrollIntoView(scrolltoView);
		sleep(3000);
		WebElement details2 = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Details']"));
		details2.click();
		sleep(3000);
		details2.click();
		
		WebElement spec2 = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Specifications']"));
		spec2.click();
		sleep(3000);
		spec2.click();
		
		WebElement shipping2 = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Shipping & Returns']"));
		shipping2.click();
		sleep(3000);
		shipping2.click();
		sleep(3000);
		*/
	}
		@Then("^user Clicks add to card button to add a toy and clicks to continue shop button$")
		public void user_Clicks_add_to_card_button_to_add_a_toy_and_clicks_to_continue_shop_button() throws Throwable {
			WebElement scrollinto2 = driver.findElement(By.xpath("//div[@id='above-the-fold-information']//button[text()='Add to cart']"));
			scrollIntoView(scrollinto2);
			sleep(3000);
			clickOnElement(scrollinto2);
			sleep(4000);
			WebElement viewToCart = driver.findElement(By.xpath("//a[text()='View cart & check out']"));
			clickOnElement(viewToCart);
			sleep(3000);
		}

		@Given("^User clicks cart button and navigate to show added item details$")
		public void user_clicks_cart_button_and_navigate_to_show_added_item_details() throws Throwable {
			WebElement total = driver.findElement(By.xpath("//h2[text()='Order summary']//ancestor::div[@class='sc-f82024d1-0 cBzSuK']//descendant::div[@data-test='OrderSummary4932Total2Items-accordion']"));
			clickOnElement(total);
			sleep(4000);
		}

		@When("^User Scroll page and view and check the added items$")
		public void user_Scroll_page_and_view_and_check_the_added_items() throws Throwable {
			WebElement checkbox = driver.findElement(By.xpath("//h2[text()='Order summary']//ancestor::div[@class='sc-f82024d1-0 cBzSuK']//descendant::input[@type='checkbox']"));
			radioButton(checkbox);
			sleep(4000);
		}

		@When("^User clicks to Order summary down arrowbutton and check total price details$")
		public void user_clicks_to_Order_summary_down_arrowbutton_and_check_total_price_details() throws Throwable {
			WebElement promocode = driver.findElement(By.xpath("//h2[text()='Order summary']//ancestor::div[@class='sc-f82024d1-0 cBzSuK']//descendant::button[@id='add-promo-code-btn']"));
			clickOnElement(promocode);
			sleep(4000);
		}

		@When("^User clicks to select email a gift message click on button$")
		public void user_clicks_to_select_email_a_gift_message_click_on_button() throws Throwable {
			WebElement promocode1 = driver.findElement(By.xpath("//h2[text()='Add promo code']//ancestor::div[@data-test='promo-code-modal-drawer']//descendant::input[@id='promoCodeEntry']"));
			promocode1.sendKeys("1234567897890");
			sleep(4000);
		}

		@When("^User Clicks to promo code Addbox and enter the promo code details$")
		public void user_Clicks_to_promo_code_Addbox_and_enter_the_promo_code_details() throws Throwable {
			WebElement promocodeAdd = driver.findElement(By.xpath("//h2[text()='Add promo code']//ancestor::div[@data-test='promo-code-modal-drawer']//descendant::button[text()='Add']"));
			clickOnElement(promocodeAdd);
			sleep(4000);
		}

		@Then("^User clicks to Check out all button and it's navigate to checkout page$")
		public void user_clicks_to_Check_out_all_button_and_it_s_navigate_to_checkout_page() throws Throwable {
			WebElement promocodeClose = driver.findElement(By.xpath("//h2[text()='Add promo code']//ancestor::div[@data-test='promo-code-modal-drawer']//descendant::button[@aria-label='close']"));
			clickOnElement(promocodeClose);
			sleep(4000);
			screenShot("C:\\Users\\Mr.Prem\\eclipse-workspace\\targettoy\\ScreenShot\\TargetToys.png");
			
		}

}

