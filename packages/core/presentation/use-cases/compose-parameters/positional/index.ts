import { Param } from '../../../../domain';
import { DataParams } from '../../../entities';
import { IComposeParamPositional } from '../../../protocols/compose-parameters';
import { ComposeParamLike } from '../param-like';

export class ComposeParamPositional
	extends ComposeParamLike<Param.Positional, DataParams.Positional>
	implements IComposeParamPositional
{
	performPartial = (positional: Param.Positional) => {
		return {
			index: positional.index,
		};
	};
}
