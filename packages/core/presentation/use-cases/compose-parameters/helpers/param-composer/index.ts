import { Param } from '../../../../../domain';
import { DataParams } from '../../../../entities';
import { filterUndef } from './filterUndef';

export abstract class ParamComposerHelper<P extends Param.Flag, DP extends DataParams.Like> {
	abstract perform: ComposeParamLike.Fn<P, DP>;

	public compose = (param: P): DP => {
		return filterUndef(this.perform(param));
	};

	protected ifNotUndef = <V, N>(value: V | undefined, onUndef: (value: V) => N): N => {
		if (value !== undefined) return onUndef(value as any);
		return undefined as any;
	};

	protected forceArray = <V>(value: V | ReadonlyArray<V>): ReadonlyArray<V> => {
		return Array.isArray(value) ? value : [value];
	};
}

export namespace ComposeParamLike {
	export type Fn<P extends Param.Flag, DP extends DataParams.Like> = (param: P) => DP;
}
