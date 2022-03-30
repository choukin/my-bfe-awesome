# [VSCode 插件](https://github.com/sxei/vscode-plugin-demo)

## 安装生成器

[vscode-generator-code](https://github.com/Microsoft/vscode-generator-code)
```bash
npm install -g yo generator-code
```

### 生成模版
```bash
yo code
```

### 项目介绍

#### 项目目录
```bash{6,8}
.
├── CHANGELOG.md
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── src
│   └── extension.js
├── test
│   ├── runTest.js
│   └── suite
└── vsc-extension-quickstart.md
```

:::tip
 项目的入口文件是 `package.json` `src/extension.js`
:::