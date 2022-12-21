function build(env) {
	const prefix = buildURLPrefix(env.target, env.platform);
	return `https://${prefix}.venca.${env.country}`;
}

function prodURLPrefix(platform) {
	if (platform === "mobile") {
		return "m";
	}
	return "www";
}

function buildURLPrefix(target, platform) {
	if (target === "prod") {
		return prodURLPrefix(platform);
	} else if (platform === "mobile") {
		return "pre-m";
	}
	return "pre";
}

module.exports = { build };
