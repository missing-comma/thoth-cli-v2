export const filterUndef = <S extends Record<PropertyKey, any>>(src: S): S => {
	const out: any = { ...src };
	Object.entries(out).forEach(([key, value]) => {
		if (value === undefined) {
			delete out[key];
		}
	});
	return out;
};
