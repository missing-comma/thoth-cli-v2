import { Jester } from '../types';

type SyncFunctionKeys<S extends Record<PropertyKey, any>> = {
	[K in keyof S]: S[K] extends (...args: any) => infer R ? (R extends Promise<any> ? never : K) : never;
}[keyof S];

type AsyncFunctionKeys<S extends Record<PropertyKey, any>> = {
	[K in keyof S]: S[K] extends (...args: any) => Promise<any> ? K : never;
}[keyof S];

type FunctionType = 'async' | 'sync';
type FunctionKeys<Type extends FunctionType, S extends Record<PropertyKey, any>> = Type extends 'async'
	? AsyncFunctionKeys<S>
	: SyncFunctionKeys<S>;

export interface IMakeAnyStubCommonFn<T extends FunctionType> {
	/**
	 * Creates a stub version of the interface
	 *
	 * @param {Partial<Stub>} append properties to append to the stub after it's mocked
	 * @param {...FunctionKeys<S>[]} keys list of keys that maps to functions to automatically mock
	 *
	 * @returns {Jester.Mock.Stub}
	 */
	<S extends Record<PropertyKey, any>>(append?: Partial<S>, ...keys: FunctionKeys<T, S>[]): Jester.Mock.Stub<S>;

	/**
	 * Creates a stub version of the interface
	 *
	 * @param {...FunctionKeys<T,S>[]} keys list of keys that maps to functions to automatically mock
	 *
	 * @returns {Jester.Mock.Stub}
	 */
	<S extends Record<PropertyKey, any>>(...keys: FunctionKeys<T, S>[]): Jester.Mock.Stub<S>;
}

export interface IMakeAnyStubFn extends IMakeAnyStubCommonFn<'async'> {
	/**
	 * Same as the default behaviour, but all function implementations returns nothing, instead of a Promise
	 */
	sync: IMakeAnyStubCommonFn<'sync'>;

	/**
	 * Same as the default behaviour, but all function implementations returns a Promise that rejects to an empty error
	 */
	block: IMakeAnyStubCommonFn<'sync'>;
	/**
	 * Same as the default block behaviour, but all function implementations throws an error
	 */
	syncBlock: IMakeAnyStubCommonFn<'async'>;
}
