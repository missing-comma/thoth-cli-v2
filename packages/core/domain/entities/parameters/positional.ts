import { ParamLike } from './param-like';

export interface PositionalParameter extends ParamLike {
	readonly index: number;
}
