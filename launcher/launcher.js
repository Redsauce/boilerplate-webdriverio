const Launcher = require("@wdio/cli").default;
const environment = require("../components/componentsHelper/environment");
const capabilities = require("./capabilities");
const baseURL = require("./baseURL");
const services = require("./services");
const cucumber = require("./cucumber");
const basicOptions = require("./basicOptions");

function wdio(env) {
	return new Launcher("./wdio.conf.js", getOptions(env), env.watch).run();
}

function getOptions(env) {
	return {
		services: services.set(env),
		baseUrl: baseURL.build(env),
		cucumberOpts: cucumber.options(env),
		capabilities: capabilities.set(env),
		waitforTimeout: basicOptions.getWaitforTimeout(env),
	};
}

wdio(environment);
