import { Given, When, Then } from "@wdio/cucumber-framework";
import * as urls from "../components/componentHelper/urls";
import * as header from "../components/header/header";

Given(/^I am on the Redsauce SL blog$/, async () => {
	await browser.url("./");
	await expect(browser).toHaveUrl(urls.english_url);
}); 

When(/^I change the current language to Spanish$/, async () => {
	await header.changeToSpanish();
});

Then(/^I should see the blog in Spanish$/, async () => {
	await expect(browser).toHaveUrl(urls.spanish_url);
});