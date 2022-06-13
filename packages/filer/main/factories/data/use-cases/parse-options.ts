import { IFilerOptionsParser, ILog } from '../../../../data/protocols';
import { FilerOptionsParserAdapter } from '../../../../data/use-cases/parse-options';
import { locateFileFactory } from './locate-file';

export const parseOptionsFactory = (log: ILog): IFilerOptionsParser => {
	const locator = locateFileFactory(log);
	return new FilerOptionsParserAdapter(locator);
};
