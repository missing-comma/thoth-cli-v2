import { FilerDataParser } from '../../../domain/entities/parser';
import { IFilerWrite } from '../../protocols';

export class FilerWriteAdapter implements IFilerWrite {
	constructor(
		private readonly path: string | null,
		private readonly fs: { write: (path: string, content: string) => void; exists: (path: string) => boolean },
	) {}

	write = <Schema>(parsers: FilerDataParser<Schema> | undefined, data: Schema): void => {
		if (!this.path) return;
		const content = this.parseData(parsers, data);
		this.fs.write(this.path, content);
	};

	private parseData = <Schema>(parsers: FilerDataParser<Schema> | undefined, data: Schema): string => {
		if (parsers?.serialize) {
			return parsers.serialize(data);
		}
		if (typeof data === 'string') {
			return data;
		}
		return data as any;
	};
}
