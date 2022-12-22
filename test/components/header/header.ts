import * as selectors from "./selectors.ts";
import * as urls from "../componentHelper/urls.json" assert {type: 'json'};

async function changeToSpanish () {
    await browser.url("./");
    await $(selectors.spanishLanguage).waitAndClick();
    await $(selectors.englishLanguage).waitForClickable();
    expect(browser).toHaveUrl(urls.spanish_url);
}

export { changeToSpanish };