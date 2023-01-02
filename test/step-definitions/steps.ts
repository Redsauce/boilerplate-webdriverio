import { Given, When, Then } from '@wdio/cucumber-framework'
import * as selectors from "../components/header/selectors"
import * as urls from "../components/componentHelper/urls";

//const urls = require("../components/componentHelper/urls.json");

Given(/^I am on the Redsauce SL blog$/, async () => {
    await browser.url("./");
    expect(browser).toHaveUrl(urls.english_url);
}); 

When(/^I click on the other language$/, async () => {
    const sel = await $(selectors.spanishLanguage); 
    await sel.waitAndClick();
    await $(selectors.englishLanguage).waitForClickable();
});

Then(/^I should see the blog in english$/, async () => {
    expect(browser).toHaveUrl(urls.spanish_url);
});