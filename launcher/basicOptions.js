function getWaitforTimeout(env) {
	if (env.target === "pre") {
		return 15000;
	}
	return 10000;
} 

module.exports = { getWaitforTimeout };