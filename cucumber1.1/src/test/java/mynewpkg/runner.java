package mynewpkg;



import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;



@CucumberOptions(
		plugin = {"html:src/test/java/Reporting8/output/cucumber-html-report"}
	)

@RunWith(Cucumber.class)



public class runner {

}
