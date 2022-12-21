const mobile = [["appium", {
	args: {
		log: "logs/appium.log",
		allowInsecure: "chromedriver_autodownload",
	},
}]];

function set(env) {
	if (env.platform === "mobile" && !env.emulated) {
		return mobile;
	} else if (env.browser === "firefox") {
		return ["geckodriver"];
	}
	return ["chromedriver"];
}

module.exports = { set };
