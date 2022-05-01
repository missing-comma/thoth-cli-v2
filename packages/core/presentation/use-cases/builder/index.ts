import { Param, ThothBuilder } from '../../../domain';
import { BuilderContext, BuilderContextUtils as Utils } from '../../entities/builder-context';
import { IGetInitialBuilderContext, IBuilderSetFlag, IBuilderSetPositional } from '../../protocols';

export class Builder implements ThothBuilder {
	private context!: BuilderContext;

	constructor(
		private readonly initialContext: IGetInitialBuilderContext,
		private readonly setFlag: IBuilderSetFlag,
		private readonly setPositional: IBuilderSetPositional,
	) {
		this.context = this.initialContext.get();
	}

	flag = (name: string, param: Param.Flag) => {
		this.setFlag.set(this.context, name, param);
		return this as any;
	};

	positional = (name: string, param: Param.Positional) => {
		this.setPositional.set(this.context, name, param);
		return this as any;
	};

	help = (builderCallback: BuilderContext.Help) => {
		Object.assign(this.context, { help: builderCallback });
		return this;
	};

	handle = (callback: (argv: Utils.Argv) => void) => {
		return this;
	};
}
