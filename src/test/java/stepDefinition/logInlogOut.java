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

		lp.loginPageUserName().sendKeys("admin");
		lp.loginPageUserpassord().sendKeys("admin");
		lp.loginPageUserLoginButton().click();

	}

	@When("^Enter (.+) then (.+) and clicl login button$")
	public void user_gives_incorrect_credentials(String username, String password) {

		lp.loginPageUserName().sendKeys(username);
		lp.loginPageUserpassord().sendKeys(password);
		lp.loginPageUserLoginButton().click();
	}

	@When("^Enter username \"([^\"]*)\" then password \"([^\"]*)\" and click login button$")
	public void datadriver(String user, String psw) {
		lp.loginPageUserName().sendKeys(user);
		lp.loginPageUserpassord().sendKeys(psw);
		lp.loginPageUserLoginButton().click();
	}

	@When("^Enter username after password and click login button$")
	public void tableCheck(DataTable data) {
		List<List<String>> get = data.raw();
		lp.loginPageUserName().sendKeys(get.get(0).get(0));
		lp.loginPageUserpassord().sendKeys(get.get(0).get(1));
		lp.loginPageUserLoginButton().click();

	}

	@Then("^Verify user logged ins$")
	public void verify_user_logged_in() {
		
		String actual=hp.homePageWelcomeAdmin().getText();
		String expected = "Welcome Admin";
		assertEquals(expected, actual);
	}

	@And("^User clicks logged out$")
	public void ser_clickd_logged_out() throws InterruptedException {
		hp.homePageWelcomeAdmin().click();
		Thread.sleep(1000);
		hp.homePageLogOut().click();
		
	}

	@And("^Verify user logget out$")
	public void verify_user_logged_out() {
		assertEquals("LOGIN Panel", lp.loginPageUserLoginPannel().getText());

	}

}
