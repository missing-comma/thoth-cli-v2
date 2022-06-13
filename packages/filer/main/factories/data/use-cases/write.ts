import { existsSync, writeFileSync } from 'fs';
import { IFilerWrite, ILog } from '../../../../data/protocols';
import { FilerWriteAdapter } from '../../../../data/use-cases/write-file';
import { FilerDataOptions } from '../../../../data/entities';

export const writeFileFactory = (log: ILog, options: FilerDataOptions<any>): IFilerWrite => {
	return new FilerWriteAdapter(options.path, {
		write: (path, content) => writeFileSync(path, content, { encoding: options.encoding }),
		exists: existsSync,
	});
};
