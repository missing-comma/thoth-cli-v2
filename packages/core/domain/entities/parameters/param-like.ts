export interface ParamLike {
	readonly type?: ParamLike.Type | ReadonlyArray<ParamLike.Type>;
	readonly description?: string;
	readonly default?: unknown;
	readonly global?: boolean;
	readonly multiple?: boolean;
	readonly required?: boolean;
	readonly choices?: ReadonlyArray<string | number>;
}

export namespace ParamLike {
	interface PrimitivesMap {
		number: number;
		string: string;
		boolean: boolean;
		array: Array<string | number>;
		'number-array': number[];
		'string-array': string[];
	}
	export type Type = keyof PrimitivesMap;

	export namespace ValueOf {
		type Str<K> = Extract<K, string>;

		type ToPrimitive<K> = K extends keyof PrimitivesMap ? PrimitivesMap[K] : `unable-to-match-${Str<K>}`;

		type RequiredKeys<S extends ParamLike> = { [K in keyof S]: undefined extends S[K] ? never : K }[keyof S];

		export type Primary<P extends ParamLike> = 'type' extends RequiredKeys<P>
			? P['type'] extends ReadonlyArray<infer T>
				? ToPrimitive<T>
				: ToPrimitive<P['type']>
			: 'choices' extends RequiredKeys<P>
			? P['choices'] extends ReadonlyArray<infer V>
				? V
				: unknown
			: unknown;

		export type Multiple<V, P extends ParamLike> = 'multiple' extends RequiredKeys<P> ? V[] : V;
		export type Required<V, P extends ParamLike> = 'required' extends RequiredKeys<P>
			? Exclude<V, undefined>
			: [V, undefined][number];

		export type Value<P extends ParamLike> = Multiple<Required<Primary<P>, P>, P>;
	}

	export type ValueOf<P extends ParamLike> = ValueOf.Multiple<ValueOf.Required<ValueOf.Primary<P>, P>, P>;
}
