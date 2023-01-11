# lowcode-core


monorepo

```bash
npx lerna init
```

使用 pnpm

``` js
// 1. lerna.json 添加以下配置
"npmClient": "pnpm",

// 2. 将以下配置
// package.json
{
  "workspaces": ["packages/*"]
}
// lerna.json
{
  "packages": ["packages/*"]
}

// 3. 移动到 pnpm-workspace.yaml
// pnpm-workspace.yaml
packages:
  - "packages/*"
```

执行 script task，可参考文档 [Run Tasks](https://lerna.js.org/docs/features/run-tasks)以及[示例库](https://github.com/lerna/getting-started-example)

```bash
# umi4 为对应的 package name
"dev": "lerna run dev --scope=umi4",
```

构建依赖是自动识别的，无需 nx.json 就能完成自动构建依赖的管理

NOTE: 无法启动一个 dev 命令，就能运行，是因为开发运行时，包的构建命令不会退出，所以就没有 umi4 构建的启动

## 构建

要求

- 支持输出 ems, cjs, umd
- 支持输出 sourceMap
- 支持开发实时刷新
- 支持文档，可用第三方，如 dumi

要么自己定制，要么选第三方的构建库

1. 采用 umijs `father` 作构建工具
2. 使用 `"@alib/build-scripts": "^0.1.32"` 作为构建工具
   1. `build-plugin-component@^1.0.0`
   2. `build-plugin-fusion@^0.1.0`
   3. `"@alifd/build-plugin-lowcode": "^0.3.0",`

## 开发

开发实时预览，目前有两种方式

1. 使用 alias 链接包源码调试
2. 关闭 mfsu 开关，使用包实时构建模式（推荐）
