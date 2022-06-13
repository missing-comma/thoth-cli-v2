import { existsSync, readFileSync } from 'fs';
import { IFilerRead, ILog } from '../../../../data/protocols';
import { FilerReadAdapter } from '../../../../data/use-cases/read-file';
import { FilerDataOptions } from '../../../../data/entities';

export const readFileFactory = (log: ILog, options: FilerDataOptions<any>): IFilerRead => {
	return new FilerReadAdapter(options.path, {
		read: (path) => readFileSync(path, { encoding: options.encoding }),
		exists: existsSync,
	});
};
