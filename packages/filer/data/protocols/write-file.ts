import { FilerDataParser } from '../../domain/entities/parser';

export interface IFilerWrite {
	write<Schema>(parsers: FilerDataParser<Schema> | undefined, data: Schema): void;
}
