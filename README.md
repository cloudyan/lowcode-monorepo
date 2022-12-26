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

执行 script task

```bash
# umi4 为对应的 package name
"dev": "lerna run dev --scope=umi4",
```

## 构建

可采用 father-build 用作构建工具
