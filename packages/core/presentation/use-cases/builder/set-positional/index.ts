import { Param } from '../../../../domain';
import { BuilderContext } from '../../../entities/builder-context';
import { IBuilderSetFlag, IComposeParamFlag } from '../../../protocols';

export class BuilderSetFlag implements IBuilderSetFlag {
	constructor(private readonly composer: IComposeParamFlag) {}

	set = (context: BuilderContext, key: string, flag: Param.Flag): void => {
		context.flags[key] = this.composer.compose(flag);
	};
}
