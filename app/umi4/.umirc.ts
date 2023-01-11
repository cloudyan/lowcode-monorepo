import { defineConfig } from 'umi';
import { join, resolve } from 'path';

export default defineConfig({
  npmClient: 'pnpm',
  clickToComponent: {},
  mfsu: false,

  alias: {
    // '@deepjs/lowcode-core': resolve(__dirname, '../../packages/lowcode-core/src'),
    // '@deepjs/lowcode-react-render': resolve(__dirname, '../../packages/lowcode-react-render/src'),
    // '@docs': resolve(__dirname, './docs'),
  },
});
