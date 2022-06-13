import { FilerOptions } from './domain/entities/options';
import { FilerDataParser } from './domain/entities/parser';
import { FilerPath } from './domain/entities/path';

import { Filer as FilerClass } from './main/factories/filer';

export class Filer<S = String> extends FilerClass<S> {}

export declare namespace Filer {
	export type Options<Schema = string> = FilerOptions<Schema>;
	export type Parser<Schema = string> = FilerDataParser<Schema>;
	export type Path = FilerPath;
}
