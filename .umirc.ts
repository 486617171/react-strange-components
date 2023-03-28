import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base: string | undefined = undefined;
let publicPath: string | undefined = undefined;

if (process.env.SITE_BUILD_ENV === 'PROD') {
  base = '/react-strange-components';
  publicPath = '/react-strange-components/';
}

export default defineConfig({
  title: 'Strange',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  hash: true,
  history: {
    type: 'hash',
  },
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  base,
  publicPath,
});
