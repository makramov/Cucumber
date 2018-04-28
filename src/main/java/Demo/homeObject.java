package Demo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class homeObject {


		public WebDriver driver;
	   
		public homeObject(WebDriver driver) {
			this.driver=driver;
			
		}
		
		By homePageWelcomeAdmin = By.xpath("//a[@id='welcome']");
		By homePageLogOut = By.xpath("//div[@id='welcome-menu']/ul//li[1]/a");
		
		public WebElement homePageWelcomeAdmin() {
		return	driver.findElement(homePageWelcomeAdmin);
		}
		

		public WebElement homePageLogOut() {
		return	driver.findElement(homePageLogOut);
		}
		
	}


