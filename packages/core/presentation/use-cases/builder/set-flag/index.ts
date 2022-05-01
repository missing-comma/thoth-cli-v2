import { Param } from '../../../../domain';
import { BuilderContext } from '../../../entities/builder-context';
import { IBuilderSetPositional, IComposeParamPositional } from '../../../protocols';

export class BuilderSetPositional implements IBuilderSetPositional {
	constructor(private readonly composer: IComposeParamPositional) {}

	set = (context: BuilderContext, key: string, positional: Param.Positional): void => {
		context.positionals[key] = this.composer.compose(positional);
	};
}
