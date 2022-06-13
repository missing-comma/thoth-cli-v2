import { FilerOptions } from './options';

export interface IFiler<Schema> {
	readonly options: FilerOptions<Schema>;

	read(): Schema | null;
	write(data: Schema): void;
	update(callback: (prev: Schema | null) => Schema): void;
}
