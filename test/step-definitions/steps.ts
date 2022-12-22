import { Given, When, Then } from '@wdio/cucumber-framework'
import * as selectors from "../components/header/selectors.ts"
import * as urls from "../components/componentHelper/urls.json" assert {type: 'json'};

Given(/^I am on the Redsauce SL blog$/, async () => {
    await browser.url("./");
    expect(browser).toHaveUrl(urls.english_url);
}); 

When(/^I click on the other language$/, async () => {
    await $(selectors.spanishLanguage).waitAndClick();
    await $(selectors.englishLanguage).waitForClickable();
});

Then(/^I should see the blog in english$/, async () => {
    expect(browser).toHaveUrl(urls.spanish_urls);
});