import { deepmerge } from 'deepmerge-ts'
const wdioConf = require('./wdio.conf.ts');

export const config = deepmerge(wdioConf.config, {
	capabilities: [
		{
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['headless', '--no-sandbox']
            }
        },
        {
            maxInstances: 1,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
                args: ['-headless']
            }
        }
        /*{
            maxInstances: 5,
            browserName: 'microsoftedge',
            acceptInsecureCerts: true,
            'ms:edgeOptions': {
                args: ['-headless']
            }
        }*/
	],
	services: ["chromedriver", "geckodriver"]
}, {clone: false})