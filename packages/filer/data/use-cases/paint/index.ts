import chalk from 'chalk';
import { IPaint } from '../../protocols';

export class FilerPaintAdapter implements IPaint {
	paint = (mode: IPaint.Color, message: string): string => {
		return this.paintColors[mode](message);
	};

	private readonly paintColors: Record<IPaint.Color, (message: string) => string> = {
		success: chalk.green,
		error: chalk.red,
		warn: chalk.yellow,
		'method-name': chalk.yellow.underline.bold,
		number: chalk.red.bold,
		path: chalk.cyan,
	};
}
