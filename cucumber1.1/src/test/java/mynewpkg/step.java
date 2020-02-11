package mynewpkg;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class step {
	
	@Given("enter 50 first")
	public void enter_50_first() {
		System.out.println("enter first 50");
	}
	
	@And("enter symbol add")
	public void enter_symbol_add() {
		System.out.println("enter symbol add");
	}
	
	@And("enter 40")
	public void  enter_40() {
		System.out.println(" enter 40");
	}
	
	@Then("enter equal symbol")
	public void  enter_equal_symbol() {
		System.out.println(" enter equal symbol");
	}
	
	@When("reult 100")
	public void reult_100() {
		System.out.println("reult 100");
	}

}
