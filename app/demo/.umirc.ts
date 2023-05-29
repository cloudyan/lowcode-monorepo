import { defineConfig } from 'umi';
import { join, resolve } from 'path';

export default defineConfig({
  ssr: {},
  npmClient: 'pnpm',
  clickToComponent: {},
  mfsu: false,
  hash: true,
  devtool: 'cheap-module-source-map',

  plugins: ['./plugins/plugin-html'],

  chainWebpack(memo, { env, webpack }) {
    // 设置 alias

    // 删除 Umi 内置插件
    memo.plugins.delete('hmr');
  },

  alias: {
    // '@lowcodejs/engine': resolve(__dirname, '../../packages/engine/src'),
    // '@lowcodejs/react-renderer': resolve(__dirname, '../../packages/react-renderer/src'),
    // '@lowcodejs/plugins': resolve(__dirname, '../../packages/plugins/src'),
    // '@lowcodejs/components-panel': resolve(__dirname, '../../packages/components-panel/src'),
    // '@lowcodejs/setters-panel': resolve(__dirname, '../../packages/setters-panel/src'),
    // '@lowcodejs/canvas-panel': resolve(__dirname, '../../packages/canvas-panel/src'),
    // '@docs': resolve(__dirname, './docs'),
  },
});
