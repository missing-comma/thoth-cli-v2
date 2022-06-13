import { FilerPath } from '../../domain/entities/path';

export interface IFileLocate {
	locate(filerPath: FilerPath): string | null;
}
