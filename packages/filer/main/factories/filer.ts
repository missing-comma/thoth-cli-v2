import { FilerDataOptions } from '../../data/entities';
import { IFilerRead, IFilerWrite } from '../../data/protocols';
import { IFiler } from '../../domain/entities/filer';
import { FilerOptions } from '../../domain/entities/options';
import { logFactory } from './data/use-cases/log';
import { parseOptionsFactory } from './data/use-cases/parse-options';
import { readFileFactory } from './data/use-cases/read';
import { writeFileFactory } from './data/use-cases/write';

export class Filer<Schema = string> implements IFiler<Schema> {
	private readonly dataOptions: FilerDataOptions<Schema>;
	private readonly writer: IFilerWrite;
	private readonly reader: IFilerRead;

	constructor(public readonly options: FilerOptions<Schema>) {
		const log = logFactory(!!options.debugMode);
		this.dataOptions = parseOptionsFactory(log).parse(options);

		this.writer = writeFileFactory(log, this.dataOptions);
		this.reader = readFileFactory(log, this.dataOptions);
	}

	read = (): Schema | null => this.reader.read(this.options.parsers);
	write = (data: Schema): void => this.writer.write(this.options.parsers, data);
	update = (callback: (prev: Schema | null) => Schema): void => this.write(callback(this.read()));
}
