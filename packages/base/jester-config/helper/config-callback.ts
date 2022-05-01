type Callback<T> = (prev: T) => Partial<T>;
type Value<T> = Partial<T> | Callback<T>;

export const asCallback = <T>(value: Value<T>): Callback<T> => {
	return typeof value === 'function' ? value : (prev) => Object.assign({}, prev, value);
};

export default {
	parse: asCallback,
	merge: <T>(prev: Value<T>, next: Value<T>): Callback<T> => {
		const mutators = [prev, next].map(asCallback);
		return (value) =>
			mutators.reduce((acc, curr) => {
				const next = curr(acc);
				return Object.assign({}, acc, next);
			}, value);
	},
};
