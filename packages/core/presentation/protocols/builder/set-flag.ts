import { Param } from '../../../domain';
import { BuilderContext } from '../../entities/builder-context';

export interface IBuilderSetFlag {
	set(context: BuilderContext, key: string, flag: Param.Flag): void;
}
