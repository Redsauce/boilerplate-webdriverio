const tags = require("./tags");

function getTimeout(env) {
	if (env.platform === "mobile" || env.target === "pre") {
		return 80000;
	}
	return 40000;
}

function options(env) {
	return {
		tagExpression: tags.build(env),
		timeout: getTimeout(env),
	};
}

module.exports = {options};
