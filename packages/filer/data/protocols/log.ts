export interface ILog {
	log(mode: ILog.Mode, ...args: ILog.Args): void;
}

export declare namespace ILog {
	export type Mode = 'success' | 'error' | 'warn' | 'debug';

	export type Args = [method: string, message: string];
}
