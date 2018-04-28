package resources;

import java.awt.event.ActionEvent;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class base {
	public static WebDriver driver;
	public static WebDriverWait wait;
	public Actions action;
	public Properties prop;

	public WebDriver getDriver() throws IOException {
		prop = new Properties();
		FileInputStream fils = new FileInputStream("/Users/makra/Cucumber/src/main/java/resources/data.properties");
		prop.load(fils);
		String browser = prop.getProperty("browser");

		if (browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", "/Users/makra/Desktop/java/Drivers/chromedriver");
			driver = new ChromeDriver();
		}

		else if (browser.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", "/Users/makra/Desktop/java/Drivers/geckodriver");

			driver = new FirefoxDriver();
		}

		else {
			driver = new SafariDriver();
		}

		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().window().fullscreen();
		wait = new WebDriverWait(driver,10 );
		action = new Actions(driver);
		return driver;

	}

}
