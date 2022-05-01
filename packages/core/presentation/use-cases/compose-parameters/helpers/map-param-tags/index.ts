import { DataParams } from '../../../../entities';
import { IMapParamTags } from '../../../../protocols/compose-parameters/map-param-tags';

const tag = (slug: DataParams.Tag.Slug): DataParams.Tag => {
	return { slug };
};

export class MapParamTagsAdapter implements IMapParamTags {
	map = (model: IMapParamTags.Model): IMapParamTags.Result => {
		const tags: DataParams.Tag[] = [];

		if ('index' in model && model.index !== undefined) {
			tags.push(tag('position'));
		}
		if (model.required) {
			tags.push(tag('required'));
		}
		if (model.type || model.choices) {
			tags.push(tag('type'));
		}
		if (model.default !== undefined) {
			tags.push(tag('default'));
		}

		return tags;
	};
}
