import { Param } from '../../../../domain';
import { DataParams } from '../../../entities';
import { IMapParamTags } from '../../../protocols/compose-parameters';
import { ParamComposerHelper } from '../helpers/param-composer';

export abstract class ComposeParamLike<P extends Param.Flag, DP extends DataParams.Like> extends ParamComposerHelper<
	P,
	DP
> {
	constructor(private readonly tags: IMapParamTags) {
		super();
	}

	abstract performPartial: ComposeParamLike.Fn<P, DP>;

	private composeParamLike = (param: Param.Like): DataParams.Like => {
		const tags = this.tags.map(param);

		return {
			...param,
			tags,
			type: this.ifNotUndef(param.type, this.forceArray),
		};
	};

	perform = (param: P): DP => {
		const data = this.composeParamLike(param);

		return {
			...data,
			...this.performPartial(param),
		} as any;
	};
}

export namespace ComposeParamLike {
	export type Fn<P extends Param.Flag, DP extends DataParams.Like> = (param: P) => Omit<DP, keyof DataParams.Like>;
}
