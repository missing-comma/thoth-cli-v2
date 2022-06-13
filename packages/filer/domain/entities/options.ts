import { FilerDataParser } from './parser';
import { FilerPath } from './path';

export interface FilerOptions<Schema = string> {
	readonly path: FilerPath;
	readonly parsers?: FilerDataParser<Schema>;
	readonly encoding?: BufferEncoding;
	readonly debugMode?: boolean;
}
