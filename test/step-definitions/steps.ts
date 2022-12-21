import { Given, When, Then } from '@wdio/cucumber-framework'
import * as selectors from "../components/navigate/selectors.ts"
import * as dotenv from 'dotenv'
dotenv.config()

Given(/^I am on the Redsauce SL blog$/, async () => {
    await browser.url("./");
    expect(browser).toHaveUrl(process.env.ENGLISH_URL);
}); 

When(/^I click on the other language$/, async () => {
    await $(selectors.spanishLanguage).waitAndClick();
    await $(selectors.englishLanguage).waitForClickable();
});

Then(/^I should see the blog in english$/, async () => {
    expect(browser).toHaveUrl(process.env.SPANISH_URL);
});