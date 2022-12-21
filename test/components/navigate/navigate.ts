import * as selectors from "./selectors.ts";
import * as dotenv from 'dotenv';
dotenv.config();

async function changeToSpanish () {
    await browser.url("./");
    await $(selectors.spanishLanguage).waitAndClick();
    await $(selectors.englishLanguage).waitForClickable();
    expect(browser).toHaveUrl(process.env.SPANISH_URL);
}

export { changeToSpanish };