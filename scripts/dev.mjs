import cp from 'node:child_process';

// Vite 8 calls `net use` on Windows while resolving config paths.
// The sandbox blocks spawning child processes with piped stdio, so the
// call is short-circuited (there are no network drives in this workspace).
cp.exec = (_command, options, callback) => {
  const done = typeof options === 'function' ? options : callback;
  if (typeof done === 'function') {
    process.nextTick(() => done(null, '', ''));
  }
  return { on() {}, kill() {}, unref() {} };
};

const { createServer } = await import('vite');
const react = (await import('@vitejs/plugin-react')).default;

const server = await createServer({
  configFile: false,
  root: process.cwd(),
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
});

await server.listen();
server.printUrls();
