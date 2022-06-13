import { FilerOptions } from '../../domain/entities/options';

export interface FilerDataOptions<Schema = string> {
	readonly raw: FilerOptions<Schema>;
	readonly path: string | null;
	readonly encoding: BufferEncoding;
}
