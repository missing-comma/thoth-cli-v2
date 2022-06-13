import { FilerOptions } from '../../../domain/entities/options';
import { FilerDataOptions } from '../../entities';
import { IFileLocate, IFilerOptionsParser } from '../../protocols';

export class FilerOptionsParserAdapter implements IFilerOptionsParser {
	constructor(private readonly locator: IFileLocate) {}

	parse = <Schema>(options: FilerOptions<Schema>): FilerDataOptions<Schema> => {
		return {
			raw: options,
			path: this.locator.locate(options.path),
			encoding: options.encoding || 'utf-8',
		};
	};
}
