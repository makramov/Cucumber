package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="/Users/makra/Cucumber/src/test/java/features",
		glue="stepDefinition",
		//strict=true, monochrome=true,
		plugin= {"pretty", "html:target/cucumber"}
		
		)

public class testRunner {

}