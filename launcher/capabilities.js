function getChromeArgs(env) {
	const args = [];
	env.docker && args.push("--no-sandbox");
	env.docker && args.push("--disable-dev-shm-usage");
	(env.headless || env.docker) && args.push("--headless");
	return args;
}

function mobile(env) {
	return [{
		platformName: "Android",
		platformVersion: env.androidVersion,
		browserName: env.browser,
		automationName: "UiAutomator2",
	}];
}

function emulation(env) {
	if (env.emulated) {
		return {deviceName: "Nexus 6"};
	}
}

function desktop(env) {
	return [{
		maxInstances: env.instances,
		browserName: env.browser,
		"goog:chromeOptions": {
			args: getChromeArgs(env),
			mobileEmulation: emulation(env),
		},
	}];
}

function set(env) {
	if (env.platform === "mobile" && !env.emulated){
		return mobile(env);
	}
	return desktop(env);
}

module.exports = { set };
