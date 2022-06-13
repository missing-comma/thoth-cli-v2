import { ILog, IPaint } from '../../protocols';

export class FilerLogAdapter implements ILog {
	constructor(private readonly debugMode: boolean, private readonly paint: IPaint) {}

	log = (mode: ILog.Mode, ...[method, message]: ILog.Args): void => {
		if (mode === 'debug' && !this.debugMode) return;
		const modeStr = this.modes[mode]();
		const methodStr = this.getMethod(method);

		console.log(`${modeStr} ${methodStr}${message}`);
	};

	private readonly modes: Record<ILog.Mode, () => string> = {
		success: (): string => this.paint.paint('success', '✔'),
		error: (): string => this.paint.paint('error', '✖'),
		warn: (): string => this.paint.paint('warn', '⚠'),
		debug: (): string => '🐛',
	};

	private getMethod = (method: string) => {
		return this.paint.paint('method-name', `{${method}}: `);
	};
}
