# Vue3+Vite+Eslint+Prettier 添加项目规范

## 工具
- Visal Studio Code
- VSCODE 插件
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Prettier-Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- yarn

- npm 库
    - vite
    - prettier
    - eslint    
    - vite-plugin-perttier
    - eslint-config-prettier
    - vite-plugin-eslint
    - typescript
    - @types/node
    - vue3

## 1. 使用 vite 生成项目

```bash
pnpm create vite my-vue-app --template vue-ts
cd my-vue-app
pnpm install
```

## 2. 安装包
```bash
pnpm add prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser vue-eslint-parser eslint-define-config -D
```

## 3. 配置

prettier.config.js
@[code js](./config/prettier.config.js)

.prettierignore
@[code](./config/.prettierignore)

.eslintrc.js
@[code js](./config/.eslintrc.js)

.eslintignore
@[code](./config/.eslintignore)

.gitignore

@[code](./config/.gitignore)

## 4. [vite-plugin-eslint](https://www.npmjs.com/package/vite-plugin-eslint)
```sh
pnpx i vite-plugin-eslint -D
```
配置`vite.config.ts`

```ts{3,9-12}
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false, // 取消缓存
      fix: true, // 自动修复
    }),
  ],
});
```





