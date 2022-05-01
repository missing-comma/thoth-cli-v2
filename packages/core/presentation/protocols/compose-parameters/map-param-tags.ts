import { Param } from '../../../domain';
import { DataParams } from '../../entities';

export interface IMapParamTags {
	map(model: IMapParamTags.Model): IMapParamTags.Result;
}

export namespace IMapParamTags {
	export type Model = Param.Flag | Param.Positional;
	export type Result = ReadonlyArray<DataParams.Tag>;
}
