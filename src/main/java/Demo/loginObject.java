package Demo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class loginObject {
	public WebDriver driver;

	public loginObject(WebDriver driver) {
		this.driver = driver;

	}

	By loginPageUserName = By.xpath("//input[@id='txtUsername']");
	By loginPageUserpassord = By.xpath("//input[@id='txtPassword']");
	By loginPageUserLoginButton = By.xpath("//input[@id='btnLogin']");
	By loginPageUserLoginPannel = By.xpath("//div[@id='logInPanelHeading']");

	public WebElement loginPageUserName() {
		return driver.findElement(loginPageUserName);
	}

	public WebElement loginPageUserpassord() {
		return driver.findElement(loginPageUserpassord);
	}

	public WebElement loginPageUserLoginButton() {
		return driver.findElement(loginPageUserLoginButton);
	}

	public WebElement loginPageUserLoginPannel() {
		return driver.findElement(loginPageUserLoginPannel);
	}

}
