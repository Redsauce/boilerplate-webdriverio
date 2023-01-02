import * as selectors from "./selectors";
import * as urls from "../components/componentHelper/urls";
//const urls = require("../components/componentHelper/urls.json");

async function changeToSpanish () {
    await browser.url("./");
    await $(selectors.spanishLanguage).waitAndClick();
    await $(selectors.englishLanguage).waitForClickable();
    expect(browser).toHaveUrl(urls.spanish_url);
}

export { changeToSpanish };