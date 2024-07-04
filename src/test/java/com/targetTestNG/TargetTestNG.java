package com.targetTestNG;
import com.baseclass.BaseClass;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;


public class TargetTestNG extends BaseClass{

		public static WebDriver driver;
		@BeforeSuite
		private void setProperty() {
			browserlaunch("chrome");
		}
		@BeforeTest
		private void geturl() {
			getUrl("https://www.target.com/");
			sleep(6000);
		}
		@BeforeClass
		private void signin() {
			WebElement signin1 = driver.findElement(By.xpath("//a[@aria-label='Account, sign in']"));
			clickOnElement(signin1);
			
			sleep(3000);
			WebElement sinin = driver.findElement(By.xpath("//div[@data-test='content-wrapper']//ul//li//a//span[text()='Sign in']"));
			
			clickOnElement(sinin);
			
			sleep(5000);
		}
		@BeforeMethod
		private void enterDetails() {
			WebElement username = driver.findElement(By.xpath("//div[@class='styles__InputWrapper-sc-17c8y80-0 hypJge styles__AuthInput-sc-q9vn5-0 eeoYPi']//input"));
			inputValueElement(username, "hbraman93@gmail.com");
			
			WebElement password = driver.findElement(By.xpath("//div[@class='styles__InputWrapper-sc-17c8y80-0 bUAMkG styles__AuthInput-sc-q9vn5-0 eeoYPi']//input"));
			inputValueElement(password, "Hello@target");
			sleep(4000);
			
		}
		@Test
		private void purchaseToys() {
			getUrl("https://www.target.com/");
			
			driver.findElement(By.xpath("//input[@placeholder='What can we help you find?']")).sendKeys("Spiderman toy");
			sleep(2000);
			driver.findElement(By.xpath("//input[@id='search']//ancestor::div[1]//descendant::span[@class='h-text-normal']//b[text()='s for boys']")).click();
			
			sleep(4000);
			WebElement age = driver.findElement(By.xpath("//div[@class='styles__FacetButtonContainer-sc-lrdzvz-0 NogpL']//button[@data-test='facet-button-Age']"));
			clickOnElement(age);
			
			sleep(2000);
			WebElement age2 = driver.findElement(By.xpath("//label[@for='chk-5zl3y']//input[@type='checkbox']"));
			radioButton(age2);
			
			sleep(2000);
			WebElement ageapply = driver.findElement(By.xpath("//button[text()='Apply']"));
			clickOnElement(ageapply);
			
			sleep(4000);
			scrollDown(0, 8000);
			sleep(2000);
			scrollFullDown();
			sleep(2000);
			scrollUp(0, -4000);
			sleep(2000);
			scrollUp(0,-4000);
			sleep(2000);
			WebElement toy1 = driver.findElement(By.xpath("//span[text()='for “spiderman toys for boys”']//ancestor::div[5]//descendant::div[@class='styles__ProductCardVariantDefaultWrapper-sc-9lksuw-4 fTrrfI']"));
			clickOnElement(toy1);
			
			sleep(4000);
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
			WebElement details = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Details']"));
			details.click();
			sleep(3000);
			details.click();
			
			WebElement spec = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Specifications']"));
			spec.click();
			sleep(3000);
			spec.click();
			
			WebElement shipping = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Shipping & Returns']"));
			shipping.click();
			sleep(3000);
			shipping.click();
			sleep(3000);
			
//			WebElement qa = driver.findElement(By.xpath("//div[@id='product-detail-tabs']//h3[text()='Q&A']"));
//			qa.click();
//			sleep(3000);
//			qa.click();
//			
			
			WebElement scrollinto1 = driver.findElement(By.xpath("//button[text()='Add to cart']"));
			scrollIntoView(scrollinto1);
			sleep(3000);
			WebElement addtoCard = driver.findElement(By.xpath("//div[@id='above-the-fold-information']//button[text()='Add to cart']"));
			clickOnElement(addtoCard);
			
		
			sleep(4000);
			WebElement continueShop = driver.findElement(By.xpath("//button[text()='Continue shopping']"));
			clickOnElement(continueShop);
			sleep(3000);
			driver.findElement(By.xpath("//button[@aria-label='reset']")).click();
			sleep(3000);
			
			WebElement search2 = driver.findElement(By.xpath("//form[@class='styles__SearchForm-sc-wnzihy-1 bNqoRc']//input[@data-test='@web/Search/SearchInput']"));
			search2.sendKeys("batman");
			sleep(2000);
			WebElement toys2 = driver.findElement(By.xpath("//div[@id='SearchTypeaheadOverlay']//descendant::span[@class='h-text-normal']//b[text()=' toys']"));
			clickOnElement(toys2);
			sleep(2000);
			scrollDown(0, 8000);
			sleep(2000);
			scrollFullDown();
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
			WebElement scrollinto2 = driver.findElement(By.xpath("//div[@id='above-the-fold-information']//button[text()='Add to cart']"));
			scrollIntoView(scrollinto2);
			sleep(3000);
			clickOnElement(scrollinto2);
			sleep(4000);
			WebElement viewToCart = driver.findElement(By.xpath("//a[text()='View cart & check out']"));
			clickOnElement(viewToCart);
			
			sleep(4000);
			WebElement total = driver.findElement(By.xpath("//h2[text()='Order summary']//ancestor::div[@class='styles__StyledDiv-sc-1a3wn3i-0 dNPUKk']//descendant::div[@data-test='OrderSummary4728Total2Items-accordion']"));
			clickOnElement(total);
			sleep(4000);
			WebElement checkbox = driver.findElement(By.xpath("//h2[text()='Order summary']//ancestor::div[@class='styles__StyledDiv-sc-1a3wn3i-0 dNPUKk']//descendant::input[@type='checkbox']"));
			radioButton(checkbox);
			sleep(4000);
			WebElement promocode = driver.findElement(By.xpath("//h2[text()='Order summary']//ancestor::div[@class='styles__StyledDiv-sc-1a3wn3i-0 dNPUKk']//descendant::button[@id='add-promo-code-btn']"));
			clickOnElement(promocode);
			sleep(4000);
			WebElement promocode1 = driver.findElement(By.xpath("//h2[text()='Add promo code']//ancestor::div[@data-test='promo-code-modal-drawer']//descendant::input[@id='promoCodeEntry']"));
			promocode1.sendKeys("1234567897890");
			sleep(4000);
			WebElement promocodeAdd = driver.findElement(By.xpath("//h2[text()='Add promo code']//ancestor::div[@data-test='promo-code-modal-drawer']//descendant::button[text()='Add']"));
			clickOnElement(promocodeAdd);
			sleep(4000);
			WebElement promocodeClose = driver.findElement(By.xpath("//h2[text()='Add promo code']//ancestor::div[@data-test='promo-code-modal-drawer']//descendant::button[@aria-label='close']"));
			clickOnElement(promocodeClose);
			sleep(4000);
		}
		@AfterMethod
		private void screenShot() throws Throwable {
			screenShot("C:\\Users\\Mr.Prem\\eclipse-workspace\\targettoy\\ScreenShot\\TargetTestNG1.png");
			
		}
		@AfterClass
		private void pageValidation() {
			System.out.println("Target runs SuccessFull");

		}
		@AfterTest
		private void close1() {
			driver.close();
		}
		@AfterSuite
		private void clearCookies() {
			driver.manage().deleteAllCookies();
		}
		
		
		
			

		}





