import { Test } from '../../helper/types';
import { JestPresetBuilder } from '../jest-config-preset-builder';
import base from './base';

const specifics: Test.Specifics = {
	unit: {
		testMatch: ['**/*.spec.tsx', '**/*.spec.jsx'],
	},
	integration: {
		testMatch: ['**/*.test.ts', '**/*.test.jsx'],
	},
};

export default new JestPresetBuilder(
	{
		transform: {
			'^.+\\.(js|jsx|ts|tsx)$': [
				`next/dist/build/swc/jest-transformer.js`,
				{
					isEsmProject: false,
				},
			],
			'.+\\.(css|svg|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
		},
	},
	specifics,
).extend(base);
