package com.jotform.form.cucumber.steps;

import com.jotform.form.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class TestFormSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on next button on first page$")
    public void iClickOnNextButtonOnFirstPage() {
        new HomePage().clickOnStartNextBtn();
    }

    @And("^I have added first name$")
    public void iHaveAddedFirstName() {
        new HomePage().enterFirstName("Bablo");
    }

    @And("^I have added last name$")
    public void iHaveAddedLastName() {
        new HomePage().enterLastName("Bebli");
    }

    @And("^I click on next buttn on secondpage$")
    public void iClickOnNextButtnOnSecondpage() {
        new HomePage().clickOnFirstNameNextBtn();
    }

    @And("^I have drag and dropped file from desktop$")
    public void iHaveDragAndDroppedFileFromDesktop() {
        new HomePage().uploadFile("C:\\Users\\Kajal Usadadiya\\Desktop\\StudySchedule.xisx");
    }

    @And("^I clicked on next button on draganddrop page$")
    public void iClickedOnNextButtonOnDraganddropPage() {
        new HomePage().clickOnBrowseFileNextBtn();
    }

    @And("^I have added signaure$")
    public void iHaveAddedSignaure() {
        new HomePage().dragAndDropSignature();

    }

    @And("^I have clicked on signature next button$")
    public void iHaveClickedOnSignatureNextButton() {
        new HomePage().clickOnSignNextBtn();
    }




    @And("^I have sent \"([^\"]*)\"$")
    public void iHaveSent(String date)  {
        new HomePage().clickOnCalender();
        new HomePage().selectDate("2021-12-21");
        // Write code here that turns the phrase above into concrete actions

    }

    @And("^I should be able to click on next button on date page$")
    public void iShouldBeAbleToClickOnNextButtonOnDatePage() {
        new HomePage().clickOnDateNextbtb();
    }

    @And("^I should be abel to select message from dropdown$")
    public void iShouldBeAbelToSelectMessageFromDropdown() {
        new HomePage().selectMaidenName();
    }

    @And("^I should be able to add message$")
    public void iShouldBeAbleToAddMessage() {
        new HomePage().sendYourAns("Babli's mum Babita");
    }

    @And("^I should be able to click on submit button$")
    public void iShouldBeAbleToClickOnSubmitButton() {
        new HomePage().clickOnSubmitBtn();
    }

    @Then("^I should be able to see message$")
    public void iShouldBeAbleToSeeMessage() {


        String expectedMessage = "Thank You!";
        String actualMessage = new HomePage().getSubmissionText();
       Assert.assertEquals("Thank You!", expectedMessage, actualMessage);


    }

}
