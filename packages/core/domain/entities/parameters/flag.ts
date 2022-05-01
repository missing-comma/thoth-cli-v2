import { ParamLike } from './param-like';

export interface FlagParameter extends ParamLike {
	readonly alias?: string | ReadonlyArray<string>;
}
