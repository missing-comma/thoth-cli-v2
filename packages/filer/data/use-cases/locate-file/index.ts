import { FilerPath } from '../../../domain/entities/path';
import { IFileLocate, ILog, IPaint } from '../../protocols';

export class FileLocateAdapter implements IFileLocate {
	constructor(
		private readonly fs: { exists: (path: string) => boolean },
		private readonly path: { join: (...paths: string[]) => string },
		private readonly log: ILog,
		private readonly paint: IPaint,
	) {}

	locate = (filerPath: FilerPath): string | null => {
		const { uri, possibleLocations } = filerPath;
		const location = possibleLocations.map((loc) => this.path.join(loc, uri)).find(this.fs.exists) ?? null;

		if (!location) {
			this.log.log(
				'error',
				'locate',
				`Unable to locate [${this.paint.paint('path', uri)}] in\n${possibleLocations
					.map((loc) => {
						return '  - ' + this.paint.paint('path', loc);
					})
					.join('\n')}`,
			);
			return null;
		}
		return location;
	};
}
