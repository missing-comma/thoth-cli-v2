import { FilerDataParser } from '../../../domain/entities/parser';
import { IFilerRead } from '../../protocols';

export class FilerReadAdapter implements IFilerRead {
	constructor(
		private readonly path: string | null,
		private readonly fs: { read: (path: string) => string | null; exists: (path: string) => boolean },
	) {}

	read = <Schema>(parsers: FilerDataParser<Schema> | undefined): Schema | null => {
		if (!this.path) return null;
		const rawData = this.fs.read(this.path);
		if (!rawData) return null;
		return this.parseData(parsers, rawData);
	};

	private parseData = <Schema>(parsers: FilerDataParser<Schema> | undefined, rawData: string): Schema | null => {
		if (parsers?.parse) {
			return parsers.parse(rawData);
		}
		return rawData as any;
	};
}
