import { fileURLToPath } from 'url';

export const websitePath = fileURLToPath(new URL('../dist/', import.meta.url));
