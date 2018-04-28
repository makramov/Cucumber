package stepDefinition;

import java.io.IOException;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import resources.base;

public class setUpandtearDown extends base{
	
	@Before
	public void setUp() throws IOException {
		getDriver();
		driver.get(prop.getProperty("url"));
	}
	
   @After
   public void tearDown() {
	  driver.quit();
  }
}
