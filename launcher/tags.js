const args = process.argv.slice(2);

function build(env) {
	return buildMainTags(env).concat(getOptionalTags()).join(" and ");
}

function buildMainTags(env) {
	return [
		makeTag(env.target, ["pre", "prod"]),
		makeTag(env.country, ["es", "pt"]),
		makeTag(env.platform, ["desktop", "mobile"]),
	];
}

function makeTag(choice, options) {
	const unselected_options = options.filter((x) => x!== choice)
		.map((x) => `not @${x}`)
		.join(" and ");

	return `(@${choice} or (${unselected_options}))`;
}

function getOptionalTags() {
	return args.filter((arg) => arg.startsWith("@") || arg.startsWith("not @"));
}

module.exports = {
	build,
};
