# lowcode-monorepo

- [lowcode-monorepo](#lowcode-monorepo)
  - [文档](#文档)
  - [开发环境](#开发环境)
  - [项目结构](#项目结构)
  - [初始化](#初始化)
  - [新增模块](#新增模块)

## 文档

## 开发环境

- node@16.16.0
- pnpm@7.x
- react@17.0.2
- react-dom@17.0.2

## 项目结构

低代码项目包含以下仓库

以下为 `lowcode-monorepo` 项目结构

```bash
.
├── README.md
├── app
│   ├── app     # 应用项目
│   └── demo    # demo 示例
├── lerna.json
├── package.json
├── packages
│   ├── engine              # 引擎
│   │   ├── package.json
│   │   └── src
│   │       ├── index.tsx         # 入口文件
│   │       ├── editor/           # 编辑器核心
│   │       ├── plugins/          # 插件系统
│   │       ├── skeleton/         # 骨架工作台
│   │       ├── project/          # 文档模型
│   │       ├── designer/         # 设计器核心
│   │       ├── utils/            # 工具方法
│   │       └── assets/           # 资产管理
│   │           ├── material/         # 物料加载管理
│   │           ├── setters/          # 设置器加载管理
│   │           └── request/          # 请求数据及处理
│   ├── components-panel          # 组件面板
│   ├── setters-panel             # 设置器面板
│   ├── canvas-panel              # 画布面板
│   ├── react-renderer            # 画布 - 渲染器
│   ├── simulator-renderer        # 画布 - 模拟器
│   ├── components                # 内置组件集合
│   ├── setters                   # 内置设置器集合
│   └── plugins                   # 内置插件集合
│       ├── index.tsx                 # 入口文件
│       ├── plugin-logo               # logo 插件
│       ├── plugin-components-panel   # 组件面板插件
│       ├── plugin-canvas-panel       # 画布面板插件
│       ├── plugin-setters-panel      # 设置器面板插件
│       ├── ...
│       ├── plugin-save               # 保存插件
│       └── plugin-preview            # 预览插件
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## 初始化

```bash
# 安装依赖
pnpm i

# demo 开发预览
npm run demo

# lowcodeui 应用项目预览
npm run lowcodeui
```

## 新增模块

```bash
cd packages
npx create-father xxx
# 选择及输入
❯ Both
❯ pnpm
? Input NPM package name › @lowcodejs/xxx
```

