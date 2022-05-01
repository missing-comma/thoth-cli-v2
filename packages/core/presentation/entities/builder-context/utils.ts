import { BuilderContext } from '.';
import { DataParams } from '..';
import { Argument as Arg, Param } from '../../../domain';

export namespace BuilderContextUtils {
	type Group<K extends PropertyKey, V> = { [Key in K]: V };

	type JoinProp<Data extends BuilderContext, K extends keyof Data, V extends Data[K]> = Omit<Data, K> &
		Group<K, V & Data[K]>;

	export namespace Inject {
		export type Flag<Data extends BuilderContext, K extends string, F extends Param.Flag> = JoinProp<
			Data,
			'flags',
			Group<K, F & DataParams.Flag.Additional>
		>;
		export type Positional<Data extends BuilderContext, K extends string, P extends Param.Positional> = JoinProp<
			Data,
			'positionals',
			Group<K, P & DataParams.Positional.Additional>
		>;
	}
}

export namespace BuilderContextUtils {
	type ValueOf<P extends Record<string, DataParams.Like>> = { [K in keyof P]: Param.Like.ValueOf<P[K]> };
	export type Argv<Data extends BuilderContext = BuilderContext> = Arg<
		ValueOf<Data['flags']> & ValueOf<Data['positionals']>
	>;
}
