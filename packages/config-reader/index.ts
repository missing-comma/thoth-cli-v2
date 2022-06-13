import { Filer } from '@missing-comma/filer';

interface Config {
	readonly debug: boolean;
}

const awesomeConfig = new Filer<Config>({
	path: {
		uri: './config.json',
		possibleLocations: [process.cwd()],
	},
	parsers: {
		parse: JSON.parse,
	},
});
