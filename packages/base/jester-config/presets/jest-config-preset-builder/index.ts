import configCallback from '../../helper/config-callback';
import { Test } from '../../helper/types';

export type { Config } from '@jest/types';

export class JestPresetBuilder {
	public static scope?: Test.Scope;
	protected config: Test.Builder.ConfigCallback;

	constructor(config: Test.Builder.Config, protected specificScopeConfig: Test.Specifics) {
		this.config = configCallback.parse(config);
	}

	public extend = (other: JestPresetBuilder) => {
		const config = configCallback.merge(this.config, other.config);
		const specificScopeConfig = this.extendSpecifics(other.specificScopeConfig);
		return new JestPresetBuilder(config, specificScopeConfig);
	};

	public parse = (initial: Test.Config) => {
		const config = this.config(initial);
		const scope = JestPresetBuilder.scope;
		if (scope) {
			const configMutator = this.specificScopeConfig[scope];
			if (configMutator) {
				const configMutatorFn = typeof configMutator === 'function' ? configMutator : () => configMutator;
				Object.assign(config, configMutatorFn(config));
			}
		}
		return config;
	};

	private extendSpecifics = (other: Test.Specifics): Test.Specifics => {
		const scopes = ['unit', 'integration', 'staged', 'ci'] as const;

		return Object.assign({}, ...scopes.map((scope) => this.extendSpecificsConfigWhen(other, scope)));
	};

	private extendSpecificsConfigWhen = (other: Test.Specifics, scope: Test.Scope): Test.Specifics => {
		const curr = this.specificScopeConfig[scope];
		const next = other[scope];
		const out: Test.Specifics = {};

		if (curr && next) {
			out[scope] = configCallback.merge(curr, next);
		}
		out[scope] = curr ?? next;
		return out;
	};
}
