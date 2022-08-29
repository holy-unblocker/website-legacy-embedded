import { fileURLToPath } from 'url';

export const websiteBuild = fileURLToPath(
	new URL('../build/', import.meta.url)
);
