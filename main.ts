// Daily news image entry — Node 22, no dependencies.
// Publishes the adjacent entry.png into the grader's output folder.
// Locally: MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const destination = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

copyFileSync(source, destination);
