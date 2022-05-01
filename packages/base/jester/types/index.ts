type Foo = (...args: any) => any;

export namespace Jester {
	export type Mock<F extends Foo> = jest.Mock<ReturnType<F>, Parameters<F>>;

	export type Spy<F extends Foo> = jest.SpyInstance<ReturnType<F>, Parameters<F>>;

	export type Watchable<F extends Foo> = Mock<F>;

	export const asMock = <F extends Foo>(fn: F): Mock<F> => fn as any;

	export interface LifeCycles {
		beforeAll: jest.Lifecycle;
		beforeEach: jest.Lifecycle;
		afterAll: jest.Lifecycle;
		afterEach: jest.Lifecycle;
	}
}

export namespace Jester.Mock {
	export type Stub<S> = { [K in keyof S]: S[K] extends Foo ? Jester.Mock<S[K]> : S[K] };
}
