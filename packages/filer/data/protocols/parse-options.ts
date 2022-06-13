import { FilerOptions } from '../../domain/entities/options';
import { FilerDataOptions } from '../entities';

export interface IFilerOptionsParser {
	parse<Schema>(options: FilerOptions<Schema>): FilerDataOptions<Schema>;
}
