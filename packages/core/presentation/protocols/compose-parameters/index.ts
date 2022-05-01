import { Param } from '../../../domain';
import { DataParams } from '../../entities';

export * from './map-param-tags';

export interface IComposeParamLike {
	composeParamLike(param: Param.Like): DataParams.Like;
}

export interface IComposeParamFlag {
	compose(flag: Param.Flag): DataParams.Flag;
}

export interface IComposeParamPositional {
	compose(positional: Param.Positional): DataParams.Positional;
}
