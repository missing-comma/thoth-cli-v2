import { Param } from '../../../domain';
import { BuilderContext } from '../../entities/builder-context';

export interface IBuilderSetPositional {
	set(context: BuilderContext, key: string, positional: Param.Positional): void;
}
