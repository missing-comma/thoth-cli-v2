import { IPaint } from '../../../../data/protocols';
import { FilerPaintAdapter } from '../../../../data/use-cases/paint';

export const paintFactory = (): IPaint => {
	return new FilerPaintAdapter();
};
