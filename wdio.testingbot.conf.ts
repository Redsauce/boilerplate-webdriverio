exports.config = {

	specs: [
		"./test/features/**/*.feature",
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
		require: ["./test/step-definitions/steps.ts"],
		backtrace: false,
		requireModule: [],
		dryRun: false,
		failFast: false,
		snippets: true,
		source: true,
		strict: false,
		tagExpression: "",
		timeout: 60000,
		ignoreUndefinedDefinitions: true,
	},
};