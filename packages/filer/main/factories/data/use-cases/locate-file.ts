import { join } from 'path';
import { existsSync } from 'fs';
import { IFileLocate, ILog } from '../../../../data/protocols';
import { FileLocateAdapter } from '../../../../data/use-cases/locate-file';
import { paintFactory } from './paint';

export const locateFileFactory = (log: ILog): IFileLocate => {
	return new FileLocateAdapter({ exists: existsSync }, { join }, log, paintFactory());
};
