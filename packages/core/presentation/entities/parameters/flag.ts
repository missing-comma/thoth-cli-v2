import { FlagParameter } from '../../../domain';
import { DataParamLike } from './param-like';

export interface DataFlagParameter
	extends DataParamLike.Extend<FlagParameter, keyof DataFlagParameter.Additional>,
		DataFlagParameter.Additional {}

export namespace DataFlagParameter {
	export interface Additional extends DataParamLike.Additional {}

	export type Extend<P extends FlagParameter, K extends keyof P = never> = Additional & Omit<P, keyof Additional | K>;
}
