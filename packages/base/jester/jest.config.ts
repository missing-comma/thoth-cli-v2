import { JestConfigBuilder } from '@missing-comma/jester-config';

const config = new JestConfigBuilder();

config.preset('node').config({});
config.onScopes({});

export default config.parse();
