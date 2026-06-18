# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 **VuePress 2 (beta)** 构建的个人前端知识库（"前端个人积累"），部署在 GitHub Pages 上。主要内容为中文技术文档，涵盖 Vue、JavaScript、TypeScript、CSS、Node.js、工具链等前端生态知识。

- **仓库地址**: `https://github.com/choukin/my-bfe-awesome`
- **基础路径**: `/my-bfe-awesome/`
- **部署分支**: `gh-pages`（通过 GitHub Actions 自动部署）

## 常用命令

```bash
# 安装依赖（项目同时包含 pnpm-lock.yaml 和 package-lock.json，两者均可）
npm install
# 或: pnpm install

# 本地开发服务器（热更新）
npm run docs:dev

# 生产构建（输出到 docs/.vuepress/dist）
npm run docs:build

# ESLint 检查
npx eslint . --ext .js,.ts,.vue
```

> 注意：项目没有配置测试框架，`npm test` 会直接报错退出。

## 项目架构

### VuePress 站点结构 (`docs/`)

文档根目录遵循 VuePress 2 的标准布局：

- `docs/.vuepress/config.ts` — 主站点配置（语言、标题、基础路径、主题）
- `docs/.vuepress/configs/navbar/index.ts` — 顶部导航栏配置（`NavbarConfig` 类型）
- `docs/.vuepress/configs/sidebar/index.ts` — 侧边栏配置（`SidebarConfig` 类型），按路径前缀分组
- `docs/README.md` — 首页配置

### 内容分区

`docs/` 下的顶级目录对应不同的知识模块，每个模块对应一个侧边栏分组：

| 目录 | 内容 |
|------|------|
| `guide/` | 通用指南：mac、npm、git、linux、chrome、node、excel、工具等 |
| `vue/` | Vue 2/3 相关笔记、Vite、ElementUI、低代码、diff 算法 |
| `js/` | JavaScript 片段、TypeScript、rem、文件保存、异步校验等 |
| `css/` | CSS 相关 |
| `nestjs/` | NestJS 相关 |
| `webpack/` | Webpack 构建工具 |
| `hello-vue3/` | Vue 3 学习项目（独立子项目，有自己的 package.json） |
| `collect/` | 收藏资源 |
| `xmind/` | 思维导图 |
| `db/` | 数据库相关 |
| `editor/` | 编辑器相关 |
| `vscode/` | VS Code 相关 |

### 添加新页面

1. 在对应的 `docs/<模块>/` 目录下创建 `.md` 文件
2. 在 `docs/.vuepress/configs/sidebar/index.ts` 的对应分组中添加文件路径（需带 `.md` 后缀）
3. 如果是新的顶级模块，需要在 navbar 配置中添加入口

### 配置文件修改

- **导航栏**: 编辑 `docs/.vuepress/configs/navbar/index.ts`
- **侧边栏**: 编辑 `docs/.vuepress/configs/sidebar/index.ts`
- **主题/站点**: 编辑 `docs/.vuepress/config.ts`

## 部署流程

push 到 `main` 分支会自动触发 `.github/workflows/docs.yml`，构建并部署到 `gh-pages` 分支。也支持手动触发（workflow_dispatch）。

- **Node 版本**: 14
- **包管理**: yarn（CI 环境）
- **构建输出**: `docs/.vuepress/dist`

## 代码规范

- **语言**: 所有文档内容使用中文
- **ESLint**: 继承 `plugin:vue/essential` + `google` 规范
- **Vue 组件命名**: 必须使用 kebab-case 多字命名（`vue/component-definition-name-casing: error`）
- **Vue 多字命名**: 不强制要求（`vue/multi-word-component-names: off`）
- **代码格式化**: Prettier

## OpenSpec 变更管理

项目集成了 [OpenSpec](https://github.com/nicepkg/openspec)，用于规范驱动的变更管理：

- `openspec/config.yaml` — OpenSpec 配置
- `openspec/changes/` — 活跃的变更提案
- `openspec/specs/` — 已发布的规范
- `.github/skills/openspec-*` — GitHub Skills 集成（propose、apply、archive、explore）

## 注意事项

- VuePress 2 仍处于 beta 阶段，部分 API 可能变动
- `docs/.vuepress/.cache` 和 `docs/.vuepress/.temp` 是缓存目录，已被 gitignore，可安全删除
- `hello-vue3/` 是独立的 Vue 3 子项目，不属于 VuePress 构建范围
- 根目录下的 `test.js`、`vscode.md`、`shell-use.md` 等文件不属于 VuePress 站点
