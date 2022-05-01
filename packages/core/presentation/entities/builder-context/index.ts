import { DataParams } from '..';
export * from './utils';

export interface BuilderContext extends BuilderContext.Empty {
	readonly flags: Record<string, DataParams.Flag>;
	readonly positionals: Record<string, DataParams.Positional>;
}

export namespace BuilderContext {
	export interface Empty {
		readonly flags: {};
		readonly positionals: {};

		readonly help: BuilderContext.Help | null;
	}
}

export namespace BuilderContext {
	export type Help<Data extends BuilderContext = BuilderContext> = (data: Data, error?: unknown) => void;
}
