exports.config = {

	specs: [
		'./test/features/**/*.feature',
	],

	capabilities: [

		{
			"appium:name": "iPhone 13", 
			"appium:deviceName": "Galaxy S21", 
			"platformName": "Android", 
			"appium:version": "11.0", 
			"appium:app": "tb://ce8789b9067274bc7c5c02da", 
			"appium:appPackage": "com.wdiodemoapp", 
			"appium:maxduration": 99999999999999, 
			"appium:ensureWebviewsHavePages": true, 
			"appium:nativeWebScreenshot": true, 
			"appium:newCommandTimeout": 3600, 
			"appium:connectHardwareKeyboard": true, 
		},
	],

	logLevel: "debug",
	coloredLogs: true,
	screenshotPath: "screenshots",
	waitforTimeout: 10000,
	framework: "cucumber",
	services: ["testingbot"],
	user: "632723b35f62cc763bfa1a3ac2cc8804",
	key: "9790eafb8ab2bb3f48bfa631a9184c64",

	reporters: ["dot"],
	reporterOptions: {
		outputDir: "./",
	},

	cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./test/step-definitions/steps.ts'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: true
    },
};