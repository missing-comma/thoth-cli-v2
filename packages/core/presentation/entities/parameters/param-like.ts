import { ParamLike } from '../../../domain';
import { ParamTag } from './tags';

export interface DataParamLike extends Omit<ParamLike, keyof DataParamLike.Additional>, DataParamLike.Additional {}

export namespace DataParamLike {
	export type Extend<P extends ParamLike, K extends PropertyKey = never> = DataParamLike &
		Omit<P, keyof Additional | K>;
	export interface Additional {
		readonly tags: ReadonlyArray<ParamTag>;
		readonly type?: ReadonlyArray<ParamLike.Type>;
	}
}
