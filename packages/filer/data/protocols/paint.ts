export interface IPaint {
	paint(color: IPaint.Color, message: string | number): string;
}

export declare namespace IPaint {
	export type Color = 'success' | 'error' | 'warn' | 'path' | 'number' | 'method-name';
}
