const {spawnSync} = require("child_process");
const {asyncMap} = require("../components/componentsHelper/asyncfunctions");
const failures = require("./failures");
const ARGS = process.argv.slice(2);

const allCombinations = [
	["es", "desktop"],
	["pt", "desktop"],
	["es", "mobile", "emulated"],
	["pt", "mobile", "emulated"],
];

async function runAll() {
	const failed_scenarios = await asyncMap(allCombinations,
		async ([country, platform, ...rest]) => {
			spawnSync("yarn",
				["test", country, platform, ...rest].concat(ARGS),
				{stdio: "inherit"});
			return failures.get(country, platform);
		});
	failures.print(failed_scenarios);
}

runAll();
