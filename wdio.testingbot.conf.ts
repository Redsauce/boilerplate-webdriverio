import { deepmerge } from 'deepmerge-ts'
const wdioConf = require('./wdio.conf.ts');

export const config = deepmerge(wdioConf.config, {
	capabilities: [
		{
			"browserName": "chrome",
			"version": "9.0",
			"deviceName": "Galaxy S8",
			"platformName": "Android",
			"realDevice": true,
			"name" : "My First Mobile Test",
		},
	],
	user: process.env.TB_KEY,
	key: process.env.TB_SECRET,
	services: ["testingbot"],
}, {clone: false})