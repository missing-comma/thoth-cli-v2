import { BuilderContext as Data, BuilderContextUtils as Utils } from '../../../presentation/entities/builder-context';
import { Param } from '../../entities';

export interface ThothBuilder<D extends Data = Data.Empty> {
	flag<K extends string, P extends Param.Flag>(name: K, param: P): ThothBuilder<Utils.Inject.Flag<D, K, P>>;

	positional<K extends string, P extends Param.Positional>(
		name: K,
		param: P,
	): ThothBuilder<Utils.Inject.Positional<D, K, P>>;

	help(builderCallback: Data.Help<D>): ThothBuilder<D>;

	handle(callback: (argv: Utils.Argv<D>) => void): ThothBuilder<D>;
}
