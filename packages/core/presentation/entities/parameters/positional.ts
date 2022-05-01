import { PositionalParameter } from '../../../domain';
import { DataParamLike } from './param-like';

export interface DataPositionalParameter
	extends DataParamLike.Extend<PositionalParameter, keyof DataPositionalParameter.Additional>,
		DataPositionalParameter.Additional {}

export namespace DataPositionalParameter {
	export interface Additional extends DataParamLike.Additional {}

	export type Extend<P extends PositionalParameter, K extends keyof P = never> = Additional &
		Omit<P, keyof Additional | K>;
}
