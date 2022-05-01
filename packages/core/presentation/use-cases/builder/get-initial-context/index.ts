import { BuilderContext } from '../../../entities/builder-context';
import { IGetInitialBuilderContext } from '../../../protocols';

export class GetInitialBuilderContext implements IGetInitialBuilderContext {
	get = (): BuilderContext => {
		return {
			flags: {},
			positionals: {},
			help: null,
		};
	};
}
