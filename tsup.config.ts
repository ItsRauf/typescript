import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', '!**/__tests__/*'],
  splitting: false,
  clean: true,
  minify: true,
  treeshake: true,
});
