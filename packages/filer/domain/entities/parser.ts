export interface FilerDataParser<Schema = string> {
	serialize?(data: Schema): string;
	parse?(data: string): Schema;
}
