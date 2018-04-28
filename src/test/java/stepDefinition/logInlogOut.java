package stepDefinition;

import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.util.List;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;

import Demo.homeObject;
import Demo.loginObject;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import resources.base;

@RunWith(Cucumber.class)
public class logInlogOut extends base {

	public loginObject lp = new loginObject(driver);
	public homeObject hp = new homeObject(driver);

	@Given("^User is in login page$")
	public void user_is_in_login_page() throws IOException, InterruptedException {

		driver.getTitle();
 
	}

	@When("^Enter username and password and clicl login button$")
	public void user_gives_correct_credentials() {

		driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys("admin");
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys("admin");
		driver.findElement(By.xpath("//input[@id='btnLogin']")).click();

	}

	@When("^Enter (.+) then (.+) and clicl login button$")
	public void user_gives_incorrect_credentials(String username, String password) {

		driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(password);
		driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
	}

	@When("^Enter username \"([^\"]*)\" then password \"([^\"]*)\" and click login button$")
	public void datadriver(String user, String psw) {
	driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(user);
	driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(psw);
	driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
	}
    @When("^Enter username after password and click login button$")
    public void tableCheck(DataTable data) {
    	List<List<String>> get=data.raw();
    	driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(get.get(0).get(0));
    	driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(get.get(0).get(1));
	driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
    	    	
    	
    }
    
	@Then("^Verify user logged ins$")
	public void verify_user_logged_in() {
		String actual = driver.findElement(By.xpath("//a[@id='welcome']")).getText();
		String expected = "Welcome Admin";
		assertEquals(expected, actual);
	}

	@And("^User clicks logged out$")
	public void ser_clickd_logged_out() throws InterruptedException {
		driver.findElement(By.xpath("//a[@id='welcome']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//div[@id='welcome-menu']/ul//li[2]/a")).click();

	}

	@And("^Verify user logget out$")
	public void verify_user_logged_out() {
		assertEquals("LOGIN Panel", driver.findElement(By.xpath("//div[@id='logInPanelHeading']")).getText());

	}

}
