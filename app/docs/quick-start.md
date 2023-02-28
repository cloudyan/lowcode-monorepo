# 快速开始

## 前置知识

1. ES6+, class, async, ES Modules
2. React 基础
3. TypeScript 类型系统
4. Mobx 状态管理

## 环境准备

1. node@16.16.0
2. pnpm@7.x

## 项目运行

### 安装依赖

```bash
# 安装依赖
pnpm i

# demo 开发预览
npm run demo

# lowcodeui 项目预览
npm run lowcodeui
```

### 项目说明

该项目是使用 lerna 管理的 monorepo 项目

以下为常用命令，更多参看官方[lerna 命令](https://lerna.js.org/docs/api-reference/commands)

```bash
# 多个项目
npx lerna run build --scope=header,footer
npx lerna run build --ignore=header,footer
# 支持 glob
npx lerna run --scope package-1 --scope "*-2" lint
npx lerna run --scope="package-{1,2,5}" test
npx lerna run --ignore "package-@(1|2)" --ignore package-3 lint

# demo 为对应的 package name
"demo": "lerna run dev --scope=demo",
"dev": "lerna run dev --ignore=demo",

# 直接运行库和应用
"dev": "lerna run dev",
```

### 版本发布

```bash
# 发布稳定包
npm run release

# 预发布, 默认 alpha 包
npm run release:alpha
# 预发包, beta 包
npm run release:beta
```

**发布失败（部分包），怎么办？**

示例效果

```bash
# 正式包
Changes:
 - @lowcodejs/canvas-panel: 0.0.2 => 0.0.3
 - @lowcodejs/components-panel: 0.0.2 => 0.0.3
 - @lowcodejs/engine: 0.0.2 => 0.0.3
 - @lowcodejs/plugins: 0.0.2 => 0.0.3
 - @lowcodejs/react-renderer: 0.0.2 => 0.0.3
 - @lowcodejs/setters-panel: 0.0.2 => 0.0.3

# 预发包
Found 6 packages to publish:
 - @lowcodejs/canvas-panel => 0.0.4-alpha.2+a1c7701
 - @lowcodejs/components-panel => 0.0.4-alpha.2+a1c7701
 - @lowcodejs/engine => 0.0.4-alpha.2+a1c7701
 - @lowcodejs/plugins => 0.0.4-alpha.2+a1c7701
 - @lowcodejs/react-renderer => 0.0.4-alpha.2+a1c7701
 - @lowcodejs/setters-panel => 0.0.4-alpha.2+a1c7701
```
