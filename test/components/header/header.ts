import * as selectors from "./selectors";

async function changeToSpanish () {
	await browser.url("./");
	await $(selectors.spanishLanguage).waitAndClick();
	await $(selectors.englishLanguage).waitForClickable();
}

export { changeToSpanish };