export interface ParamTag {
	// label: string | string[];
	slug: ParamTag.Slug;
}

export namespace ParamTag {
	export type Slug = 'type' | 'required' | 'position' | 'default';
}
