import { Argument } from './argument';
import { Param } from './parameters';

export interface ThothBuilderData extends ThothBuilderData.Empty {
	readonly flags: Record<string, Param.Flag>;
	readonly positionals: Record<string, Param.Positional>;
}

export namespace ThothBuilderData {
	type Group<K extends PropertyKey, V> = { [Key in K]: V };

	type JoinProp<Data extends ThothBuilderData, K extends keyof Data, V extends Data[K]> = Omit<Data, K> &
		Group<K, V & Data[K]>;

	export namespace Inject {
		export type Flag<Data extends ThothBuilderData, K extends string, F extends Param.Flag> = JoinProp<
			Data,
			'flags',
			Group<K, F>
		>;
		export type Positional<Data extends ThothBuilderData, K extends string, P extends Param.Positional> = JoinProp<
			Data,
			'positionals',
			Group<K, P>
		>;
	}

	export interface Empty {
		readonly flags: {};
		readonly positionals: {};

		readonly help: ThothBuilderData.Help;
	}
}

export namespace ThothBuilderData {
	export type Help<Data extends ThothBuilderData = ThothBuilderData> = (data: Data, error?: unknown) => void;
}

export namespace ThothBuilderData {
	type ValueOf<P extends Record<string, Param.Like>> = { [K in keyof P]: Param.Like.ValueOf<P[K]> };
	export type Arg<Data extends ThothBuilderData> = Argument<ValueOf<Data['flags']> & ValueOf<Data['positionals']>>;
}
