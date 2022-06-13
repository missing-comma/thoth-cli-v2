import { FilerDataParser } from '../../domain/entities/parser';

export interface IFilerRead {
	read<Schema>(parsers: FilerDataParser<Schema> | undefined): Schema | null;
}

export declare namespace IFilerRead {
	export interface Options {
		readonly encoding: string;
	}
}
