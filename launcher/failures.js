const {asyncMap} = require("../components/componentsHelper/asyncfunctions");
const fs = require("fs").promises;

async function get(country, platform) {
	return {country, platform,
		failures: await asyncMap(
			await fs.readdir("target"),
			async (report) => await scenarioFailures(`target/${report}`)),
	};
}

async function scenarioFailures(file) {
	return JSON.parse(await fs.readFile(file, {encoding: "utf-8"}))
		.flatMap((feature) => feature.elements)
		.filter((scenario) => 
			scenario.steps.find((step) =>
				step.result.status !== "passed"))
		.map((scenario) => scenario.name);
}

function print(failures) {
	failures.forEach(({country, platform, failures}) => {
		console.log(`Failures in ${platform} ${country}:`);
		console.log(failures.flat().join("; "), "\n");
	});
}

module.exports = {get, print};
