import { Test } from '../types';

import { makeJestConfig } from './builder-fn';
import presets from '../../presets';
import { JestPresetBuilder } from '../../presets/jest-config-preset-builder';
import configCallback from '../config-callback';

type TestPreset = keyof typeof presets;

const testScope: Test.Scope = (process.env.TEST_SCOPE as any) || '';
JestPresetBuilder.scope = testScope;

const emptyConfigCallback: Test.Builder.ConfigCallback = (config: Test.Config): Test.Config => config;

export class JestConfigBuilder {
	private getConfig: Test.Builder.ConfigCallback = emptyConfigCallback;
	private _specificScopeConfig: Test.Specifics = {};
	private _preset?: TestPreset;
	public readonly scope: Test.Scope = testScope;

	config = (next: Test.Builder.Config) => {
		this.getConfig = configCallback.merge(this.getConfig, next);
		return this;
	};

	preset = (next: TestPreset) => {
		this._preset = next;
		return this;
	};

	onScopes = (next: Test.Specifics) => {
		Object.assign(this._specificScopeConfig, next);
		return this;
	};

	onScope = (scope: Test.Scope, next: Test.SpecificScope.Config) => {
		this._specificScopeConfig[scope] = next;
		return this;
	};

	parse = (): Test.Config => {
		const initialConfig = this.getInitialConfig();
		return makeJestConfig(initialConfig, this._specificScopeConfig, this.scope);
	};

	private getInitialConfig = (): Test.Config => {
		const initial: Test.Config = {};
		if (this._preset) {
			const preset = presets[this._preset];
			const presetConfig = preset.parse(initial);
			return this.getConfig(presetConfig);
		}
		return this.getConfig(initial);
	};
}
