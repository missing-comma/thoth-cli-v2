import { Param } from '../../../../domain';
import { DataParams } from '../../../entities';
import { IComposeParamFlag } from '../../../protocols/compose-parameters';
import { ComposeParamLike } from '../param-like';

export class ComposeParamFlag extends ComposeParamLike<Param.Flag, DataParams.Flag> implements IComposeParamFlag {
	performPartial = (flag: Param.Flag) => {
		return {
			alias: this.ifNotUndef(flag.alias, this.forceArray),
		};
	};
}
