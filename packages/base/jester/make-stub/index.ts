import makeAnySubFactory from './generate-make-any-stub';
import { IMakeAnyStubFn } from './protocol';

const additionalProperties = {
	sync: makeAnySubFactory(),
	syncBlock: makeAnySubFactory(() => {
		throw new Error('mocked-error');
	}),
	block: makeAnySubFactory(async () => {
		throw new Error('mocked-error');
	}),
};

export const makeAnyStub: IMakeAnyStubFn = Object.assign(
	makeAnySubFactory(() => Promise.resolve(null)),
	additionalProperties,
);
