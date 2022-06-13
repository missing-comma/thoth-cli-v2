import { ILog } from '../../../../data/protocols';
import { paintFactory } from './paint';
import { FilerLogAdapter } from '../../../../data/use-cases/log';

export const logFactory = (debugMode: boolean): ILog => {
	return new FilerLogAdapter(debugMode, paintFactory());
};
