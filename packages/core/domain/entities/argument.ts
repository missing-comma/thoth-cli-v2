export type Argument<T = {}> = T & {
	/** Non-option arguments */
	_: Array<string | number>;
	/** The script name or node command */
	$0: string;
	/** All remaining options */
	[argName: string]: unknown;
};

export namespace Argument {
	export type Inject<T, K extends string, V> = T & { [Key in K]: V };
}
