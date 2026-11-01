import cp from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// Vite on Windows probes `net use` while resolving config paths. Child
// processes with piped stdio are blocked by the local sandbox, so stub it.
cp.exec = (_command, options, callback) => {
  const done = typeof options === 'function' ? options : callback;
  if (typeof done === 'function') process.nextTick(() => done(null, '', ''));
  return { on() {}, kill() {}, unref() {} };
};

const { build } = await import('vite');
const react = (await import('@vitejs/plugin-react')).default;
const { viteSingleFile } = await import('vite-plugin-singlefile');

const snapshot = process.argv.includes('--snapshot');
const standalone = process.argv.includes('--standalone');
const singleFile = snapshot || standalone;

const stubVideos = {
  name: 'single-file-video-stubs',
  enforce: 'pre',
  resolveId(source) {
    if (snapshot && /\.(webm|mp4)(\?.*)?$/.test(source)) return '\0video-stub';
    if (standalone && /\.mp4(\?.*)?$/.test(source)) return '\0video-stub';
    return null;
  },
  load(id) {
    if (id === '\0video-stub') return 'export default "";';
    return null;
  },
};

const plugins = singleFile
  ? [
      stubVideos,
      react(),
      viteSingleFile({
        useRecommendedBuildConfig: true,
        deleteInlinedFiles: true,
      }),
    ]
  : [react()];

const outDir = snapshot ? 'snapshot' : standalone ? 'standalone' : 'dist';

await build({
  configFile: false,
  root: process.cwd(),
  base: './',
  mode: snapshot ? 'snapshot' : 'production',
  plugins,
  build: {
    outDir,
    emptyOutDir: true,
    assetsInlineLimit: singleFile ? 100000000 : 0,
    cssCodeSplit: !singleFile,
    minify: snapshot ? false : true,
    sourcemap: false,
    chunkSizeWarningLimit: 100000,
  },
});

if (standalone) {
  const source = path.join(process.cwd(), 'standalone', 'index.html');
  const targetDir = path.join(process.cwd(), 'preview');
  const target = path.join(targetDir, 'portfolio-preview.html');
  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(source, target);
  const size = (fs.statSync(target).size / 1024 / 1024).toFixed(1);
  console.log(`standalone preview: ${target} (${size} MB)`);
} else {
  console.log(snapshot ? 'snapshot build complete' : 'production build complete');
}
