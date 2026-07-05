import esbuild from 'esbuild';
import path from 'path';

const entry = process.argv[2];
if (!entry) {
  console.error('Usage: npm run build:full <path-to-solution.ts>');
  process.exit(1);
}

const outfile = path.join(
  `dist/${path.dirname(entry.replace("src", ""))}`,
  path.basename(entry, '.ts') + '.js'
);

esbuild.build({
  entryPoints: [entry],
  bundle: true,
  platform: 'node',
  outfile,
}).catch(() => process.exit(1));