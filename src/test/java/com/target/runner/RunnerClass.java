package com.target.runner;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.baseclass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//java//com//target//feature",
glue="com.target.stepdefinition",
monochrome= true,
dryRun= false,
strict=true,
plugin = {"html:Reports/Html_Reports","pretty","json:Reports/Json_Reports.json",
"com.cucumber.listener.ExtentCucumberFormatter:Reports/Extend_Report.html"})
public class RunnerClass extends BaseClass{
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() {

		driver = browserlaunch("chrome");
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);

	}
	
	@AfterClass
	public static void tearDown() {
		
		driver.close();
	}


}
